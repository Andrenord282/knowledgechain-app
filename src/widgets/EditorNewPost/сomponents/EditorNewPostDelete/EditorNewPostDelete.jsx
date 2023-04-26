//-----hooks-----//
import useClasses from 'hooks/useClasses';
import useEditorNewPostSlice from 'hooks/slices/useEditorNewPostSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const EditorNewPostDelete = (props) => {
	const { classes, schemaItemId } = props;
	const inheritClasses = useClasses(classes);
	const editorNewPostModel = useEditorNewPostSlice();

	const hamdlerDeleteSchemaItem = () => {
		editorNewPostModel.deleteCurrentSchemaItem(schemaItemId);
	};

	return (
		<Button classes={inheritClasses} handleClick={hamdlerDeleteSchemaItem}>
			<Icon.Delete className="btn-icon" />
		</Button>
	);
};

export default EditorNewPostDelete;
