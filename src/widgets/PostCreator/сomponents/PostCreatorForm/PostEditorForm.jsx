//-----hooks-----//
import useClasses from 'hooks/useClasses';
import { useEffect } from 'react';
import useUserSlice from 'hooks/slices/useUserSlice';
import { usePostCreatorParams } from 'hooks/postCreatorSlice';
import { usePostCreatorSchemaController } from 'hooks/postCreatorSlice';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectPostSchema } from 'store/postCreatorSchemaSlice';

//-----сomponents-----//
import Button from 'сomponents/Button';
import PostCreatorTitle from '../PostCreatorTitle';
import PostCreatorText from '../PostCreatorText';
import PostCreatorImage from '../PostCreatorImage';
import PostCreatorTopics from '../PostCreatorTopics';
import Render from 'сomponents/Render';

//-----style-----//
import './PostCreatorForm.scss';

const PostCreatorForm = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const postSchema = useSelector(selectPostSchema);
	const { userName, userId } = useUserSlice();
	const postCreatorSchemaController = usePostCreatorSchemaController();
	const postCreatorParams = usePostCreatorParams();

	useEffect(() => {
		if (userName && userId) {
			// postCreatorParams.handlerInitPostParams(userName, userId);
		}
	}, [userName, userId]);

	useEffect(() => {
		postCreatorSchemaController.initSchema();
	}, []);

	return (
		<form
			encType="multipart/form-data"
			className={inheritClasses + ' post-creator-form'}
			onSubmit={(e) => {
				// postCreatorForm.submitNewPost(e);
			}}>
			{postSchema.map((schemaItem, schemaItemIndex) => {
				const schemaLength = postSchema.length;
				const schemaItemIsLast = schemaItemIndex === postSchema.length - 1;

				switch (true) {
					case schemaItem.type === 'title':
						return (
							<PostCreatorTitle
								key={schemaItem.id}
								classes="post-creator-form__title"
								schemaItemIndex={schemaItemIndex}
								schemaItemId={schemaItem.id}
							/>
						);
					case schemaItem.type === 'text':
						return (
							<PostCreatorText
								key={schemaItem.id}
								classes="post-creator-form__text"
								schemaItemIndex={schemaItemIndex}
								schemaItemId={schemaItem.id}
								schemaLength={schemaLength}
								schemaItemIsLast={schemaItemIsLast}
							/>
						);
					// case schemaItem.type === 'image':
					// 	return (
					// 		<PostCreatorImage
					// 			classes="post-creator-form__image"
					// 			key={schemaItem.id}
					// 			postCreatorSlice={postCreatorForm}
					// 			schemaItemImageUrl={schemaItem.value}
					// 			schemaItemId={schemaItem.id}
					// 			schemaItemIndex={schemaItemIndex}
					// 			schemaLength={postCreatorForm.postSchema.length}
					// 			schemaItemIsLast={schemaItemIsLast}
					// 		/>
					// 	);
				}
			})}
			{/* <PostCreatorTopics classes="post-creator-form__topics" postCreatorSlice={postCreatorSlice} /> */}
			{/* <Button
				classes={!postCreatorForm.isValid ? 'post-creator-form__btn-send inactive' : 'post-creator-form__btn-send'}
				type="submit">
				<span className="btn-text">Создать пост</span>
			</Button> */}
		</form>
	);
};

export default PostCreatorForm;
