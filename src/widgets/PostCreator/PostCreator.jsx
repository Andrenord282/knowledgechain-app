//-----hooks-----//
import { useEffect } from 'react';
import useClasses from 'hooks/useClasses';
import useAlertState from 'hooks/useAlertState';
import useValidatePostCreator from './hooks/useValidatePostCreator';

//-----controllers-----//
import { usePostCreatorParamsController } from 'controllers';
import { usePostCreatorSubmitController } from 'controllers';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectLoadedUser, selectUserName, selectUserId } from 'store/userSlice';
import { selectPostCreatorParams } from 'store/postCreatorParamsSlice';
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
	const inheritClasses = useClasses(classes);
	// const loadedUser = useSelector(selectLoadedUser);
	const userName = useSelector(selectUserName);
	const userId = useSelector(selectUserId);
	const postParams = useSelector(selectPostCreatorParams);
	const postSchema = useSelector(selectPostSchema);
	const postTopics = useSelector(selectTopicListSelected);
	const validatePostCreator = useValidatePostCreator();
	const alert = useAlertState();
	const postCreatorParamsController = usePostCreatorParamsController();
	const postCreatorSubmitController = usePostCreatorSubmitController();

	// useEffect(() => {
	// 	if (loadedUser) {
	// 		postCreatorParamsController.initPostParams(userId, userName);
	// 	}
	// }, [loadedUser]);

	useEffect(() => {
		validatePostCreator.validation(postSchema);
	}, [postSchema]);

	const handlerSubmitPost = (e) => {
		e.preventDefault();
		postCreatorSubmitController.submitPost(alert, postParams, postSchema, postTopics);
	};

	return (
		<div className={`${inheritClasses} post-creator`}>
			<form encType="multipart/form-data" className="post-creator__form" onSubmit={handlerSubmitPost}>
				{postSchema.map((schemaItem, schemaItemIndex) => {
					const schemaLength = postSchema.length;
					const schemaItemIsLast = schemaItemIndex === postSchema.length - 1;

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
					}
				})}
				<PostCreatorTopics classes="post-creator__topics" />
				<Button
					classes={!validatePostCreator.valid ? 'post-creator__btn-send inactive' : 'post-creator__btn-send'}
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
