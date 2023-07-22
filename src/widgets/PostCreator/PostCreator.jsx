/* eslint-disable react-hooks/exhaustive-deps */
//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useEffect } from 'react';
import { useAlertState } from 'hooks/useAlertState';
import { useValidatePostCreator } from './hooks/useValidatePostCreator';

//-----controllers-----//
import { usePostCreatorController } from "controllers";

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectUserStatus, selectUserId, selectUserName, } from 'store/userSlice';
import { selectParams, selectSchema, selectTopics } from "store/postCreatorSlice";

//-----components-----//
import Button from 'components/Button';
import Alert from 'components/Alert';
import Navigation from 'components/Navigation';
import LinkCustom from 'components/LinkCustom';
import * as Icon from 'components/Icon';
import PostCreatorTitle from './components/PostCreatorTitle';
import PostCreatorText from './components/PostCreatorText';
import PostCreatorImage from './components/PostCreatorImage';
import PostCreatorTopics from './components/PostCreatorTopics';

//-----style-----//
import './PostCreator.scss';

const PostCreator = (props) => {
    const { classes } = props;
    const userStatus = useSelector(selectUserStatus);
    const userId = useSelector(selectUserId);
    const userName = useSelector(selectUserName);
    const params = useSelector(selectParams);
    const schema = useSelector(selectSchema);
    const topics = useSelector(selectTopics);
    const alert = useAlertState();
    const validatePostCreator = useValidatePostCreator();
    const postCreatopController = usePostCreatorController();


    useEffect(() => {
        if (userStatus === 'loaded') {
            postCreatopController.initParams(userId, userName);
        }
    }, [userStatus]);

    useEffect(() => {
        validatePostCreator.validation(schema);
    }, [schema]);

    const handlerSubmitPost = (e) => {
        e.preventDefault();
        postCreatopController.submitPost(alert, params, schema, topics);
    };

    const handleBackMainPage = () => {
        postCreatopController.backMainPage();
    };

    return (
        <div className={classNames(classes, 'post-creator')}>
            <Navigation classes="post-creator__nav nav">
                <LinkCustom classes="nav__link-btn btn" link={'/'} handleClick={handleBackMainPage}>
                    <Icon.ArrowBack className="btn-icon" />
                </LinkCustom>
            </Navigation>
            <form encType="multipart/form-data" className="post-creator__form" onSubmit={handlerSubmitPost}>
                {schema.map((schemaItem, schemaItemIndex) => {
                    const schemaLength = schema.length;
                    const schemaItemIsLast = schemaItemIndex === schema.length - 1;

                    switch (true) {
                        case schemaItem.type === 'title':
                            return (
                                <PostCreatorTitle
                                    key={schemaItem.id}
                                    classes="post-creator__title"
                                    validError={validatePostCreator.validErrorsList[schemaItem.id] || null}
                                    schemaItemIndex={schemaItemIndex}
                                />
                            );
                        case schemaItem.type === 'text':
                            return (
                                <PostCreatorText
                                    key={schemaItem.id}
                                    classes="post-creator__text"
                                    validError={validatePostCreator.validErrorsList[schemaItem.id] || null}
                                    schemaItemIndex={schemaItemIndex}
                                    schemaLength={schemaLength}
                                    schemaItemIsLast={schemaItemIsLast}
                                />
                            );
                        case schemaItem.type === 'image':
                            return (
                                <PostCreatorImage
                                    classes="post-creator__image"
                                    key={schemaItem.id}
                                    schemaItemIndex={schemaItemIndex}
                                    schemaLength={schemaLength}
                                    schemaItemIsLast={schemaItemIsLast}
                                />
                            );
                        default:
                            return null;
                    }
                })}
                <PostCreatorTopics classes="post-creator__topics" />
                <Button
                    classes={!validatePostCreator.valid ? 'post-creator__send-btn inactive' : 'post-creator__send-btn'}
                    disabled={!validatePostCreator.valid}
                    type="submit">
                    <span className="btn-text">Создать пост</span>
                </Button>
            </form>

            {alert.toggleAlert && (
                <div className="post-creator__alert">
                    <Alert
                        classes="post-creator__alert-item"
                        iconALert={alert.iconALert}
                        titleALert={alert.titleALert}
                        textALert={alert.textALert}
                    />
                </div>
            )}
        </div>
    );
};

export default PostCreator;
