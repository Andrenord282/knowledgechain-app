//-----hooks-----//
import useClasses from 'hooks/useClasses';
import useAlertState from 'widgets/Alert/hooks/useAlertState';

//-----widgets-----//
import Alert from 'widgets/Alert';

//-----сomponents-----//
import EditorNewPostForm from './сomponents/EditorNewPostForm';

//-----style-----//
import './EditorNewPost.scss';

const EditorNewPost = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const alertState = useAlertState();

	return (
		<div className={inheritClasses + ' editor-new-post'}>
			<EditorNewPostForm classes="editor-new-post__form" setAlert={alertState} />
			{alertState.toggleAlert && <Alert classes="editor-new-post__alert" alertFields={alertState.alertFields} />}
		</div>
	);
};

export default EditorNewPost;
