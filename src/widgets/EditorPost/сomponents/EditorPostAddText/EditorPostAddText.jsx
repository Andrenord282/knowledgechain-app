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

	return (
		<Button
			classes={inheritClasses}
			handleClick={() => {
				editorPostSchemaController.addSchemaItem(schemaItemIndex);
			}}>
			<Icon.AddText className="btn-icon" />
		</Button>
	);
};

export default EditorPostAddText;
