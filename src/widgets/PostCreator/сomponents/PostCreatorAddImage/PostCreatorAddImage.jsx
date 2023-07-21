//-----modules-----//
import classNames from "classnames";
import { formService } from 'shared/formService';

//-----hooks-----//
import { useRef } from 'react';

//-----controllers-----//
import { usePostCreatorController } from 'controllers';

//-----redux-----//
import { nanoid } from '@reduxjs/toolkit';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const PostCreatorAddImage = (props) => {
    const { classes, schemaItemIndex } = props;
    const fileInputRef = useRef();
    const postCreatorController = usePostCreatorController();

    const handleOpenFileInput = () => {
        fileInputRef.current.click();
    };

    const handleChangeFile = (e) => {
        const nameId = nanoid(5);
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        postCreatorController.addSchemaItem(schemaItemIndex, imageUrl, 'image', nameId);
        formService.pushFile(nameId, file);
    };

    return (
        <>
            <Button classes={classNames(classes)} handleClick={handleOpenFileInput}>
                <Icon.AddImage className="btn-icon" />
            </Button>
            <input
                multiple
                ref={fileInputRef}
                type="file"
                className={classNames(classes) + '-input'}
                onChange={handleChangeFile}
            />
        </>
    );
};

export default PostCreatorAddImage;
