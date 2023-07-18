/* eslint-disable react-hooks/exhaustive-deps */
//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useEffect } from 'react';
import useAlertState from 'hooks/useAlertState';
import useValidatePostCreator from './hooks/useValidatePostCreator';

//-----controllers-----//
import { usePostCreatorController } from "controllers";
// import { usePostCreatorParamsController } from 'controllers';
import { usePostCreatorSubmitController } from 'controllers';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectUserStatus, selectUserId, selectUserName, } from 'store/userSlice';
import { selectSchema } from "store/postCreatorSlice";

import { selectPostSchema } from 'store/postCreatorSchemaSlice';
import { selectTopicListSelected } from 'store/postCreatorTopicsSlice';

//-----сomponents-----//
import Button from 'сomponents/Button';
import Alert from 'сomponents/Alert';
import PostCreatorTitle from './сomponents/PostCreatorTitle';
import PostCreatorText from './сomponents/PostCreatorText';
import PostCreatorImage from './сomponents/PostCreatorImage';
import PostCreatorTopics from './сomponents/PostCreatorTopics';

//-----style-----//
import './PostCreator.scss';

const PostCreator = (props) => {
    const { classes } = props;
    const userStatus = useSelector(selectUserStatus);
    const userId = useSelector(selectUserId);
    const userName = useSelector(selectUserName);
    const schema = useSelector(selectSchema);


    const postCreatopController = usePostCreatorController();


    // const postParams = useSelector(selectPostCreatorParams);
    const postSchema = useSelector(selectPostSchema);
    const postTopics = useSelector(selectTopicListSelected);
    const validatePostCreator = useValidatePostCreator();
    const alert = useAlertState();
    // const postCreatorParamsController = usePostCreatorParamsController();
    const postCreatorSubmitController = usePostCreatorSubmitController();

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
        // postCreatorSubmitController.submitPost(alert, postParams, postSchema, postTopics);
    };

    return (
        <div className={classNames(classes, 'post-creator')}>
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
                                    validError={validatePostCreator.validErrorsList[schemaItem.id]}
                                    schemaItemIndex={schemaItemIndex}
                                />
                            );
                        case schemaItem.type === 'text':
                            return (
                                <PostCreatorText
                                    key={schemaItem.id}
                                    classes="post-creator__text"
                                    validError={validatePostCreator.validErrorsList[schemaItem.id]}
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
