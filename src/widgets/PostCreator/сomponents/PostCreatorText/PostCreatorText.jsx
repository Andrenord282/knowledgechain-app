//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useState, useRef, memo } from 'react';
import { useInputChange } from 'hooks/useInputChange';
import { useAutosizeTextArea } from 'hooks/useAutosizeTextArea';

//-----controllers-----//
import { usePostCreatorController } from 'controllers';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import PostCreatorTools from '../PostCreatorTools';

//-----style-----//
import './PostCreatorText.scss';

const PostCreatorText = (props) => {
    const { classes, validError, schemaItemIndex, schemaLength, schemaItemIsLast } = props;
    const textInputRef = useRef(null);
    const textInput = useInputChange('');
    const [toggleTools, setToggleTools] = useState(false);
    const postCreatorSchemaController = usePostCreatorController();

    useAutosizeTextArea(textInputRef.current, textInput.value);

    const handleChangeText = (e) => {
        textInput.onChenge(e);
        postCreatorSchemaController.updateSchemaItem(schemaItemIndex, e.target.value);
    };

    const handleResetText = () => {
        textInput.onReset();
        postCreatorSchemaController.updateSchemaItem(schemaItemIndex, '');
        textInputRef.current.focus();
    };

    const handleToggleTools = () => {
        setToggleTools((prevToggleTools) => !prevToggleTools);
    };

    return (
        <div className={classNames(classes, 'post-creator-text')}>
            <div className="post-creator-text__input-body">
                <textarea
                    ref={textInputRef}
                    className='post-creator-text__input text-area-custom'
                    value={textInput.value}
                    placeholder='Напишите текст'
                    onChange={handleChangeText}
                />
                {validError && <span className="post-creator-text__error">{validError}</span>}
            </div>
            <Button classes="post-creator-text__reset-btn" handleClick={handleResetText}>
                <Icon.ResetText className="btn-icon" />
            </Button>
            {!schemaItemIsLast && (
                <Button classes="post-creator-text__toggle-btn" handleClick={handleToggleTools}>
                    {!toggleTools ? <Icon.Plus className="btn-icon" /> : <Icon.Minus className="btn-icon" />}
                </Button>
            )}
            {!schemaItemIsLast && toggleTools && (
                <PostCreatorTools
                    classes="post-creator-text__tools"
                    schemaItemIndex={schemaItemIndex}
                    schemaLength={schemaLength}
                    schemaItemIsLast={schemaItemIsLast}
                />
            )}
            {schemaItemIsLast && (
                <PostCreatorTools
                    classes="post-creator-text__tools"
                    schemaItemIndex={schemaItemIndex}
                    schemaLength={schemaLength}
                    schemaItemIsLast={schemaItemIsLast}
                />
            )}
        </div>
    );
};

export default memo(PostCreatorText);
