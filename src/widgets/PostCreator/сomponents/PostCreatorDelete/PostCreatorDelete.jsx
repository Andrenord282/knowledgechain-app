//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----controllers-----//
import { usePostCreatorSchemaController } from 'controllers';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const PostCreatorDelete = (props) => {
	const { classes, schemaItemIndex } = props;
	const inheritClasses = useClasses(classes);
	const postCreatorSchemaController = usePostCreatorSchemaController();

	const handlerDeleteSchemaItem = () => {
		postCreatorSchemaController.deleteSchemaItem(schemaItemIndex);
	};

	return (
		<Button classes={inheritClasses} handleClick={handlerDeleteSchemaItem}>
			<Icon.Delete className="btn-icon" />
		</Button>
	);
};

export default PostCreatorDelete;
