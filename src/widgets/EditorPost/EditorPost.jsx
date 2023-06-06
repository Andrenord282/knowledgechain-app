//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----controllers-----//
import { useEditPostParamsController } from './controllers';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectUser } from 'store/userSlice';
import { selectPostSchema } from 'store/editorPostSchemaSlice';

//-----сomponents-----//
import Button from 'сomponents/Button';
import Alert from 'сomponents/Alert';
import EditorPostTitle from './сomponents/EditorPostTitle';
import EditorPostText from './сomponents/EditorPostText';
import EditorPostImage from './сomponents/EditorPostImage';
import EditorPostTopics from './сomponents/EditorPostTopics';

//-----style-----//
import './EditorPost.scss';
import { useEffect } from 'react';

const EditorPost = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const user = useSelector(selectUser);
	const postSchema = useSelector(selectPostSchema);
	const editPostParamsController = useEditPostParamsController();

	useEffect(() => {
		if (user.userName && user.userId) {
			editPostParamsController.initPostParams(user.userId, user.userName);
		}
	}, [user]);

	const handlerSubmitPost = (e) => {};

	return (
		<div className={inheritClasses + ' editor-post'}>
			<form encType="multipart/form-data" className="editor-post__form" onSubmit={handlerSubmitPost}>
				{postSchema.map((schemaItem, schemaItemIndex) => {
					const schemaLength = postSchema.length;
					const schemaItemIsLast = schemaItemIndex === postSchema.length - 1;

					switch (true) {
						case schemaItem.type === 'title':
							return (
								<EditorPostTitle
									key={schemaItem.id}
									classes="editor-post__title"
									schemaItemIndex={schemaItemIndex}
								/>
							);
						case schemaItem.type === 'text':
							return (
								<EditorPostText
									key={schemaItem.id}
									classes="editor-post__text"
									schemaItemIndex={schemaItemIndex}
									schemaLength={schemaLength}
									schemaItemIsLast={schemaItemIsLast}
								/>
							);
						case schemaItem.type === 'image':
							return (
								<EditorPostImage
									classes="editor-post__image"
									key={schemaItem.id}
									schemaItemIndex={schemaItemIndex}
									schemaLength={schemaLength}
									schemaItemIsLast={schemaItemIsLast}
								/>
							);
					}
				})}
				{/* <EditorPostTopics classes="editor-post__topics" editorPostSlice={editorPostSlice} /> */}
				<Button
					// classes={!editorPostForm.isValid ? 'editor-post__btn-send inactive' : 'editor-post__btn-send'}
					classes={'editor-post__btn-send'}
					type="submit">
					<span className="btn-text">Создать пост</span>
				</Button>
			</form>
			{/* {editorPostForm.alert.toggleAlert && (
				<Alert classes="editor-post__alert" alertFields={editorPostForm.alert.alertFields} />
			)} */}
		</div>
	);
};

export default EditorPost;
