//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const EditorNewPostDelete = (props) => {
	const { classes, editorNewPostSlice, schemaItemId } = props;
	const inheritClasses = useClasses(classes);

	return (
		<Button
			classes={inheritClasses}
			handleClick={() => {
				editorNewPostSlice.deleteCurrentSchemaItem(schemaItemId);
			}}>
			<Icon.Delete className="btn-icon" />
		</Button>
	);
};

export default EditorNewPostDelete;
