//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----controllers-----//
import { usePostCreatorSchemaController } from 'controllers';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const PostCreatorAddText = (props) => {
	const { classes, schemaItemIndex } = props;
	const inheritClasses = useClasses(classes);
	const postCreatorSchemaController = usePostCreatorSchemaController();

	const hanlderAddSchemaItem = () => {
		postCreatorSchemaController.addSchemaItem(schemaItemIndex);
	};

	return (
		<Button classes={inheritClasses} handleClick={hanlderAddSchemaItem}>
			<Icon.AddText className="btn-icon" />
		</Button>
	);
};

export default PostCreatorAddText;
