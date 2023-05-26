//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import Button from 'сomponents/Button';
import EditorNewPostTitle from '../EditorNewPostTitle';
import EditorNewPostText from '../EditorNewPostText';
import EditorNewPostImage from '../EditorNewPostImage';
import EditorNewPostTopics from '../EditorNewPostTopics';
import Render from 'сomponents/Render';

//-----style-----//
import './EditorNewPostForm.scss';

const EditorNewPostForm = (props) => {
	const { classes, editorNewPostSlice } = props;
	const inheritClasses = useClasses(classes);

	return (
		<form
			encType="multipart/form-data"
			className={inheritClasses + ' editor-new-post-form'}
			onSubmit={() => {
				editorNewPostSlice.submitNewPost();
			}}>
			{editorNewPostSlice.postSchema.map((schemaItem, schemaItemIndex) => {
				const schemaItemIsLast = schemaItemIndex === editorNewPostSlice.postSchema.length - 1;
				switch (true) {
					case schemaItem.type === 'title':
						return (
							<Render key={schemaItem.id} name="EditorNewPostTitle">
								<EditorNewPostTitle
									key={schemaItem.id}
									classes="editor-new-post-form__title"
									editorNewPostSlice={editorNewPostSlice}
									schemaItemIndex={schemaItemIndex}
									schemaItemId={schemaItem.id}
								/>
							</Render>
						);
					case schemaItem.type === 'text':
						return (
							<EditorNewPostText
								key={schemaItem.id}
								classes="editor-new-post-form__text"
								editorNewPostSlice={editorNewPostSlice}
								schemaItemIndex={schemaItemIndex}
								schemaItemId={schemaItem.id}
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
			{/* <EditorNewPostTopics classes="editor-new-post-form__topics" editorNewPostSlice={editorNewPostSlice} /> */}
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
