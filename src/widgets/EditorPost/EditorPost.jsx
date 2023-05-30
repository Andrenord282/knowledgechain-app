//-----hooks-----//
import useClasses from 'hooks/useClasses';
import { useEditorPostSchema } from 'hooks/editorPostSlice';

//-----widgets-----//
import Alert from 'сomponents/Alert';

//-----сomponents-----//
import EditorPostForm from './сomponents/EditorPostForm';

//-----style-----//
import './EditorPost.scss';
import { useEffect } from 'react';

const EditorPost = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' editor-post'}>
			<EditorPostForm classes="editor-post__form" />
			{/* {editorPostForm.alert.toggleAlert && (
				<Alert classes="editor-post__alert" alertFields={editorPostForm.alert.alertFields} />
			)} */}
		</div>
	);
};

export default EditorPost;
