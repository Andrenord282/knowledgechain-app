//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----controllers-----//
import { useEditorPostSchemaController } from 'hooks/editorPostSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const EditorPostDelete = (props) => {
	const { classes, schemaItemIndex } = props;
	const inheritClasses = useClasses(classes);
	const editorPostSchemaController = useEditorPostSchemaController();

	return (
		<Button
			classes={inheritClasses}
			handleClick={() => {
				editorPostSchemaController.deleteSchemaItem(schemaItemIndex);
			}}>
			<Icon.Delete className="btn-icon" />
		</Button>
	);
};

export default EditorPostDelete;
