//-----hooks-----//
import useClasses from 'hooks/useClasses';
import useEditorNewPostSlice from 'hooks/slices/useEditorNewPostSlice';

//-----widgets-----//
import Alert from 'сomponents/Alert';

//-----сomponents-----//
import EditorNewPostForm from './сomponents/EditorNewPostForm';

//-----style-----//
import './EditorNewPost.scss';

const EditorNewPost = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const editorNewPostSlice = useEditorNewPostSlice();

	return (
		<div className={inheritClasses + ' editor-new-post'}>
			<EditorNewPostForm classes="editor-new-post__form" editorNewPostSlice={editorNewPostSlice} />
			{editorNewPostSlice.alert.toggleAlert && (
				<Alert classes="editor-new-post__alert" alertFields={editorNewPostSlice.alert.alertFields} />
			)}
		</div>
	);
};

export default EditorNewPost;
