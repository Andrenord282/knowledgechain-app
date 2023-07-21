//-----modules-----//
import classNames from "classnames";

//-----controllers-----//
import { usePostCreatorController } from 'controllers';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const PostCreatorAddText = (props) => {
    const { classes, schemaItemIndex } = props;
    const postCreatorController = usePostCreatorController();

    const hanlderAddSchemaItem = () => {
        postCreatorController.addSchemaItem(schemaItemIndex);
    };

    return (
        <Button classes={classNames(classes)} handleClick={hanlderAddSchemaItem}>
            <Icon.AddText className="btn-icon" />
        </Button>
    );
};

export default PostCreatorAddText;
