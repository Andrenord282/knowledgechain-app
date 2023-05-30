//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import EditorPostAddText from '../EditorPostAddText';
import EditorPostDelete from '../EditorPostDelete';
import EditorPostAddImage from '../EditorPostAddImage';

//-----style-----//
import './EditorPostTools.scss';

const EditorPostTools = (props) => {
	const { classes, schemaItemId, schemaItemIndex, schemaLength } = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' editor-post-tools'}>
			<div className="editor-post-tools__list-tools">
				<EditorPostAddText
					classes="editor-post-tools__btn-tools"
					schemaItemIndex={schemaItemIndex}
					schemaLength={schemaLength}
				/>
				<EditorPostAddImage
					classes="editor-post-tools__btn-tools"
					schemaItemIndex={schemaItemIndex}
					schemaLength={schemaLength}
				/>
				{schemaLength > 2 && (
					<EditorPostDelete classes="editor-post-tools__btn-tools" schemaItemId={schemaItemId} />
				)}
			</div>
		</div>
	);
};

export default EditorPostTools;
