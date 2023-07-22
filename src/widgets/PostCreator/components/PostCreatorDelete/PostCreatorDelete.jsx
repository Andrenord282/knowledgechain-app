//-----modules-----//
import classNames from "classnames";

//-----controllers-----//
import { usePostCreatorController } from 'controllers';

//-----components-----//
import * as Icon from 'components/Icon';
import Button from 'components/Button';

const PostCreatorDelete = (props) => {
    const { classes, schemaItemIndex } = props;
    const postCreatorController = usePostCreatorController();

    const handleDeleteSchemaItem = () => {
        postCreatorController.deleteSchemaItem(schemaItemIndex);
    };

    return (
        <Button classes={classNames(classes)} handleClick={handleDeleteSchemaItem}>
            <Icon.Delete className="btn-icon" />
        </Button>
    );
};

export default PostCreatorDelete;
