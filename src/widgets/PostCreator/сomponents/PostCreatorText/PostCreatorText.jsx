//-----hooks-----//
import { useState, memo } from 'react';
import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';

//-----controllers-----//
import { usePostCreatorSchemaController } from 'controllers';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import TextAreaCustom from 'сomponents/TextAreaCustom';
import PostCreatorTools from '../PostCreatorTools';

//-----style-----//
import './PostCreatorText.scss';

const PostCreatorText = (props) => {
	const { classes, validError, schemaItemIndex, schemaLength, schemaItemIsLast } = props;
	const inheritClasses = useClasses(classes);
	const textInput = useInputChange('');
	const [toggleTools, setToggleTools] = useState(false);
	const postCreatorSchemaController = usePostCreatorSchemaController();

	const handlerChangeText = (e) => {
		textInput.onChenge(e);
		postCreatorSchemaController.updateSchemaItem(schemaItemIndex, e.target.value);
	};

	const handlerResetText = () => {
		textInput.onReset();
		postCreatorSchemaController.updateSchemaItem(schemaItemIndex, '');
	};

	const handlerToggleTools = () => {
		setToggleTools((prevToggleTools) => !prevToggleTools);
	};

	return (
		<div className={`${inheritClasses} post-creator-text`}>
			<div className="post-creator-text__input-body">
				<TextAreaCustom
					classes="post-creator-text__input"
					value={textInput.value}
					onChange={handlerChangeText}
					placeholder="Напишите текст"
				/>
				{validError && <span className="post-creator-text__error">{validError}</span>}
			</div>
			<Button classes="post-creator-text__btn-reset" handleClick={handlerResetText}>
				<Icon.ResetTest className="btn-icon" />
			</Button>
			{!schemaItemIsLast && (
				<Button classes="post-creator-text__btn-toggle" handleClick={handlerToggleTools}>
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
