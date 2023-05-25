//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import Button from 'сomponents/Button';
import EditorNewPostTitle from '../EditorNewPostTitle';
import EditorNewPostText from '../EditorNewPostText';
import EditorNewPostImage from '../EditorNewPostImage';
import EditorNewPostTopics from '../EditorNewPostTopics';

//-----style-----//
import './EditorNewPostForm.scss';

const EditorNewPostForm = (props) => {
	const { classes, editorNewPostSlice } = props;
	const inheritClasses = useClasses(classes);

	return (
		<form
			encType="multipart/form-data"
			className={inheritClasses + ' editor-new-post-form'}
			onSubmit={editorNewPostSlice.submitNewPost}>
			{editorNewPostSlice.postSchema.map((schemaItem, schemaItemIndex) => {
				const schemaItemIsLast = schemaItemIndex === editorNewPostSlice.postSchema.length - 1;
				switch (true) {
					case schemaItem.type === 'title':
						return (
							<EditorNewPostTitle
								key={schemaItem.id}
								classes="editor-new-post-form__title"
								schemaItemIndex={schemaItemIndex}
								schemaItemId={schemaItem.id}
								showError={editorNewPostSlice.showError}
								errorValidListNewPost={editorNewPostSlice.errorValidListNewPost}
							/>
						);
					case schemaItem.type === 'text':
						return (
							<EditorNewPostText
								classes="editor-new-post-form__text"
								key={schemaItem.id}
								schemaItemId={schemaItem.id}
								showError={editorNewPostSlice.showError}
								errorValidListNewPost={editorNewPostSlice.errorValidListNewPost}
								schemaItemIndex={schemaItemIndex}
								schemaLength={editorNewPostSlice.postSchema.length}
								schemaItemIsLast={schemaItemIsLast}
							/>
						);
					case schemaItem.type === 'image':
						return (
							<EditorNewPostImage
								classes="editor-new-post-form__image"
								key={schemaItem.id}
								editorNewPostSlice={editorNewPostSlice}
								schemaItemImageUrl={schemaItem.value}
								schemaItemId={schemaItem.id}
								schemaItemIndex={schemaItemIndex}
								schemaLength={editorNewPostSlice.postSchema.length}
								schemaItemIsLast={schemaItemIsLast}
							/>
						);
				}
			})}
			<EditorNewPostTopics classes="editor-new-post-form__topics" />
			<Button
				classes={
					!editorNewPostSlice.isValid
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
