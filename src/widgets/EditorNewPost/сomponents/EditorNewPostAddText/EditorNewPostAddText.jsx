//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const EditorNewPostAddText = (props) => {
	const { classes, editorNewPostSlice, schemaItemIndex, schemaLength } = props;
	const inheritClasses = useClasses(classes);

	return (
		<Button
			classes={inheritClasses}
			handleClick={() => {
				editorNewPostSlice.addNewSchemaItem(schemaItemIndex, schemaLength);
			}}>
			<Icon.AddText className="btn-icon" />
		</Button>
	);
};

export default EditorNewPostAddText;
