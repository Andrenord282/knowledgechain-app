//-----hooks-----//
import { useEffect } from 'react';
import useClasses from 'hooks/useClasses';
import useEditorNewPostSlice from 'hooks/slices/useEditorNewPostSlice';
import useNewPostForm from '../../hooks/useNewPostForm';

//-----сomponents-----//
import Button from 'сomponents/Button';
import EditorNewPostTitle from '../EditorNewPostTitle';
import EditorNewPostText from '../EditorNewPostText';
import EditorNewPostImage from '../EditorNewPostImage';
import EditorNewPostTopics from '../EditorNewPostTopics';

//-----style-----//
import './EditorNewPostForm.scss';

const EditorNewPostForm = (props) => {
	const { classes, setAlert } = props;
	const inheritClasses = useClasses(classes);
	const editorNewPostModel = useEditorNewPostSlice();
	const handlerNewPostForm = useNewPostForm(editorNewPostModel, setAlert);

	useEffect(() => {
		editorNewPostModel.setNewPostParams();
	}, []);

	return (
		<form
			encType="multipart/form-data"
			className={inheritClasses + ' editor-new-post-form'}
			onSubmit={handlerNewPostForm.submitNewPost}>
			{editorNewPostModel.postSchema.map((schemaItem, schemaItemIndex) => {
				const schemaItemIsLast = schemaItemIndex === editorNewPostModel.postSchema.length - 1;
				switch (true) {
					case schemaItem.type === 'title':
						return (
							<EditorNewPostTitle
								key={schemaItem.id}
								classes="editor-new-post-form__title"
								schemaItemIndex={schemaItemIndex}
								schemaItemId={schemaItem.id}
								showError={handlerNewPostForm.showError}
								errorValidListNewPost={handlerNewPostForm.errorValidListNewPost}
							/>
						);
					case schemaItem.type === 'text':
						return (
							<EditorNewPostText
								classes="editor-new-post-form__text"
								key={schemaItem.id}
								schemaItemId={schemaItem.id}
								showError={handlerNewPostForm.showError}
								errorValidListNewPost={handlerNewPostForm.errorValidListNewPost}
								schemaItemIndex={schemaItemIndex}
								schemaLength={editorNewPostModel.postSchema.length}
								schemaItemIsLast={schemaItemIsLast}
							/>
						);
					case schemaItem.type === 'image':
						return (
							<EditorNewPostImage
								classes="editor-new-post-form__image"
								key={schemaItem.id}
								schemaItemImageUrl={schemaItem.value}
								schemaItemId={schemaItem.id}
								schemaItemIndex={schemaItemIndex}
								schemaLength={editorNewPostModel.postSchema.length}
								schemaItemIsLast={schemaItemIsLast}
							/>
						);
				}
			})}
			<EditorNewPostTopics classes="editor-new-post-form__topics" />
			<Button
				classes={
					!handlerNewPostForm.isValid
						? 'editor-new-post-form__btn-send inactive'
						: 'editor-new-post-form__btn-send'
				}
				type="submit">
				<span className="btn-text">Создать пост</span>
			</Button>
		</form>
	);
};

export default EditorNewPostForm;
