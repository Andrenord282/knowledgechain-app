//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import EditorPostAddText from '../EditorPostAddText';
import EditorPostDelete from '../EditorPostDelete';
import EditorPostAddImage from '../EditorPostAddImage';

//-----style-----//
import './EditorPostTools.scss';

const EditorPostTools = (props) => {
	const { classes, schemaItemIndex, schemaLength } = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' editor-post-tools'}>
			<EditorPostAddText classes="editor-post-tools__btn-tools" schemaItemIndex={schemaItemIndex} />
			<EditorPostAddImage classes="editor-post-tools__btn-tools" schemaItemIndex={schemaItemIndex} />
			{schemaLength > 2 && (
				<EditorPostDelete classes="editor-post-tools__btn-tools" schemaItemIndex={schemaItemIndex} />
			)}
		</div>
	);
};

export default EditorPostTools;
