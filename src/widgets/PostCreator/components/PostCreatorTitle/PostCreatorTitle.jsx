//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useEffect, useRef, memo, } from 'react';
import { useInputChange } from 'hooks/useInputChange';

//-----controllers-----//
import { usePostCreatorController } from 'controllers';

//-----components-----//
import * as Icon from 'components/Icon';
import Button from 'components/Button';

//-----style-----//
import './PostCreatorTitle.scss';

const PostCreatorTitle = (props) => {
    const { classes, validError, schemaItemIndex } = props;
    const titleInputRef = useRef(null);
    const titleInput = useInputChange('');
    const postCreatorController = usePostCreatorController();

    useEffect(() => {
        titleInputRef.current.focus();

    }, []);

    const handleChangeTitle = (e) => {
        titleInput.onChenge(e);
        postCreatorController.updateSchemaItem(schemaItemIndex, e.target.value);
    };

    const handleResetTitle = () => {
        titleInput.onReset();
        postCreatorController.updateSchemaItem(schemaItemIndex, '');
        titleInputRef.current.focus();
    };

    return (
        <div className={classNames(classes, 'post-creator-title')}>
            <input
                ref={titleInputRef}
                type="text"
                className="post-creator-title__input"
                placeholder="Напишите заголовок"
                value={titleInput.value}
                onChange={handleChangeTitle}
            />
            {validError && <span className="post-creator-title__error-valid">{validError}</span>}
            <Button classes="post-creator-title__reset-btn" handleClick={handleResetTitle}>
                <Icon.ResetText className="btn-icon" />
            </Button>
        </div>
    );
};

export default memo(PostCreatorTitle);
