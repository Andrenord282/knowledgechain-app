//-----modules-----//
//-----router-----//
//-----hooks-----//
import useClasses from 'hooks/useClasses';
import useEditorNewPostSlice from 'hooks/slices/useEditorNewPostSlice';
//-----redux-----//
//-----widgets-----//
//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const EditorNewPostAddText = (props) => {
	const { classes, schemaItemIndex, schemaLength } = props;
	const inheritClasses = useClasses(classes);
	const editorNewPostModel = useEditorNewPostSlice();

	const handlerAddNewSchemaItem = () => {
		editorNewPostModel.addNewSchemaItem(schemaItemIndex, schemaLength);
	};

	return (
		<Button classes={inheritClasses} handleClick={handlerAddNewSchemaItem}>
			<Icon.AddText className="btn-icon" />
		</Button>
	);
};

export default EditorNewPostAddText;
