//-----hooks-----//
import useClasses from 'hooks/useClasses';
import { useEffect } from 'react';
import useUserSlice from 'hooks/slices/useUserSlice';
import { useEditorPostParams } from 'hooks/editorPostSlice';
import { useEditorPostSchemaController } from 'hooks/editorPostSlice';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectPostSchema } from 'store/editorPostSchemaSlice';

//-----сomponents-----//
import Button from 'сomponents/Button';
import EditorPostTitle from '../EditorPostTitle';
import EditorPostText from '../EditorPostText';
import EditorPostImage from '../EditorPostImage';
import EditorPostTopics from '../EditorPostTopics';
import Render from 'сomponents/Render';

//-----style-----//
import './EditorPostForm.scss';

const EditorPostForm = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const postSchema = useSelector(selectPostSchema);
	const { userName, idUser } = useUserSlice();
	const editorPostSchemaController = useEditorPostSchemaController();
	const editorPostParams = useEditorPostParams();

	useEffect(() => {
		if (userName && idUser) {
			editorPostParams.handlerInitPostParams(userName, idUser);
		}
	}, [userName, idUser]);

	useEffect(() => {
		editorPostSchemaController.initSchema();
	}, []);

	return (
		<form
			encType="multipart/form-data"
			className={inheritClasses + ' editor-post-form'}
			onSubmit={(e) => {
				// editorPostForm.submitNewPost(e);
			}}>
			{postSchema.map((schemaItem, schemaItemIndex) => {
				const schemaLength = postSchema.length;
				const schemaItemIsLast = schemaItemIndex === postSchema.length - 1;

				switch (true) {
					case schemaItem.type === 'title':
						return (
							<EditorPostTitle
								key={schemaItem.id}
								classes="editor-post-form__title"
								schemaItemIndex={schemaItemIndex}
								schemaItemId={schemaItem.id}
							/>
						);
					case schemaItem.type === 'text':
						return (
							<EditorPostText
								key={schemaItem.id}
								classes="editor-post-form__text"
								schemaItemIndex={schemaItemIndex}
								schemaItemId={schemaItem.id}
								schemaLength={schemaLength}
								schemaItemIsLast={schemaItemIsLast}
							/>
						);
					// case schemaItem.type === 'image':
					// 	return (
					// 		<EditorPostImage
					// 			classes="editor-post-form__image"
					// 			key={schemaItem.id}
					// 			editorPostSlice={editorPostForm}
					// 			schemaItemImageUrl={schemaItem.value}
					// 			schemaItemId={schemaItem.id}
					// 			schemaItemIndex={schemaItemIndex}
					// 			schemaLength={editorPostForm.postSchema.length}
					// 			schemaItemIsLast={schemaItemIsLast}
					// 		/>
					// 	);
				}
			})}
			{/* <EditorPostTopics classes="editor-post-form__topics" editorPostSlice={editorPostSlice} /> */}
			{/* <Button
				classes={!editorPostForm.isValid ? 'editor-post-form__btn-send inactive' : 'editor-post-form__btn-send'}
				type="submit">
				<span className="btn-text">Создать пост</span>
			</Button> */}
		</form>
	);
};

export default EditorPostForm;
