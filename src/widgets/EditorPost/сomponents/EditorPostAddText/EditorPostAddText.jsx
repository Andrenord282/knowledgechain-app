//-----hooks-----//
import useClasses from 'hooks/useClasses';
import { useEditorPostSchemaController } from 'hooks/editorPostSlice';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectPostSchema } from 'store/editorPostSchemaSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const EditorPostAddText = (props) => {
	const { classes, schemaItemIndex, schemaLength } = props;
	const inheritClasses = useClasses(classes);
	const postSchema = useSelector(selectPostSchema);
	const editorPostSchemaController = useEditorPostSchemaController();

	return (
		<Button
			classes={inheritClasses}
			handleClick={() => {
				editorPostSchemaController.addSchemaItem(postSchema, schemaItemIndex, schemaLength);
			}}>
			<Icon.AddText className="btn-icon" />
		</Button>
	);
};

export default EditorPostAddText;
