//-----modules-----//
//-----router-----//
//-----hooks-----//
import useClasses from 'hooks/useClasses';
//-----redux-----//
//-----widgets-----//
//-----сomponents-----//
import EditorNewPostAddText from '../EditorNewPostAddText';
import EditorNewPostDelete from '../EditorNewPostDelete';
import EditorNewAddImage from '../EditorNewAddImage';

//-----style-----//
import './EditorNewPostTools.scss';

const EditorNewPostTools = (props) => {
	const { classes, schemaItemId, schemaItemIndex, schemaLength } = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' editor-new-post-tools'}>
			<div className="editor-new-post-tools__list-tools">
				<EditorNewPostAddText
					classes="editor-new-post-tools__btn-tools"
					schemaItemIndex={schemaItemIndex}
					schemaLength={schemaLength}
				/>
				<EditorNewAddImage
					classes="editor-new-post-tools__btn-tools"
					schemaItemIndex={schemaItemIndex}
					schemaLength={schemaLength}
				/>
				{schemaLength > 2 && (
					<EditorNewPostDelete classes="editor-new-post-tools__btn-tools" schemaItemId={schemaItemId} />
				)}
			</div>
		</div>
	);
};

export default EditorNewPostTools;
