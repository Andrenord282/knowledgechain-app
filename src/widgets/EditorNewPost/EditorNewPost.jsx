//-----hooks-----//
import { useEffect } from 'react';
import useClasses from 'hooks/useClasses';
import useEditorNewPostSlice from 'hooks/slices/useEditorNewPostSlice';

//-----сomponents-----//
import EditorNewPostTitle from './сomponents/EditorNewPostTitle';
import EditorNewPostText from './сomponents/EditorNewPostText';
import EditorNewPostImage from './сomponents/EditorNewPostImage';

//-----style-----//
import './EditorNewPost.scss';

const EditorNewPost = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const editorNewPostModel = useEditorNewPostSlice();

	useEffect(() => {
		editorNewPostModel.setNewPostParams();
	}, []);

	return (
		<div className={inheritClasses + ' editor-new-post'}>
			{editorNewPostModel.postSchema.length > 0 &&
				editorNewPostModel.postSchema.map((schemaItem, schemaItemIndex) => {
					const schemaItemIsLast = schemaItemIndex === editorNewPostModel.postSchema.length - 1;
					switch (true) {
						case schemaItem.type === 'title':
							return (
								<EditorNewPostTitle
									classes="editor-new-post__title"
									key={schemaItem.id}
									schemaItemIndex={schemaItemIndex}
								/>
							);
						case schemaItem.type === 'text':
							return (
								<EditorNewPostText
									classes="editor-new-post__text"
									key={schemaItem.id}
									schemaItemId={schemaItem.id}
									schemaItemIndex={schemaItemIndex}
									schemaLength={editorNewPostModel.postSchema.length}
									schemaItemIsLast={schemaItemIsLast}
								/>
							);
						case schemaItem.type === 'image':
							return (
								<EditorNewPostImage
									classes="editor-new-post__image"
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
		</div>
	);
};

export default EditorNewPost;
