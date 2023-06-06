//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----controllers-----//
import { useEditorPostSchemaController } from 'hooks/editorPostSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const EditorPostAddText = (props) => {
	const { classes, schemaItemIndex } = props;
	const inheritClasses = useClasses(classes);
	const editorPostSchemaController = useEditorPostSchemaController();

	const hanlderAddSchemaItem = () => {
		editorPostSchemaController.addSchemaItem(schemaItemIndex);
	};

	return (
		<Button classes={inheritClasses} handleClick={hanlderAddSchemaItem}>
			<Icon.AddText className="btn-icon" />
		</Button>
	);
};

export default EditorPostAddText;
