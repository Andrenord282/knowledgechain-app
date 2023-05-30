//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const EditorPostDelete = (props) => {
	const { classes, schemaItemId } = props;
	const inheritClasses = useClasses(classes);

	return (
		<Button
			classes={inheritClasses}
			handleClick={() => {
				// editorPostForm.deleteCurrentSchemaItem(schemaItemId);
			}}>
			<Icon.Delete className="btn-icon" />
		</Button>
	);
};

export default EditorPostDelete;
