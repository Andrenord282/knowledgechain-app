//-----hooks-----//
import useClasses from 'hooks/useClasses';
import useAlertState from 'hooks/useAlertState';
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
	const alert = useAlertState();

	return (
		<div className={inheritClasses + ' editor-new-post'}>
			<EditorNewPostForm
				classes="editor-new-post__form"
				setAlert={alert}
				editorNewPostSlice={editorNewPostSlice}
			/>
			{alert.toggleAlert && <Alert classes="editor-new-post__alert" alertFields={alert.alertFields} />}
		</div>
	);
};

export default EditorNewPost;
