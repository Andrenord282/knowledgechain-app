//-----hooks-----//
import { memo } from 'react';
import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';

//-----controllers-----//
import { usePostCreatorSchemaController } from 'controllers';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

//-----style-----//
import './PostCreatorTitle.scss';

const PostCreatorTitle = (props) => {
	const { classes, validError, schemaItemIndex } = props;
	const inheritClasses = useClasses(classes);
	const titleInput = useInputChange('');
	const postCreatorController = usePostCreatorSchemaController();

	const handlerChangeTitle = (e) => {
		titleInput.onChenge(e);
		postCreatorController.updateSchemaItem(schemaItemIndex, e.target.value);
	};

	const handlerResetTitle = () => {
		titleInput.onReset();
		postCreatorController.updateSchemaItem(schemaItemIndex, '');
	};

	return (
		<div className={`${inheritClasses} post-creator-title`}>
			<input
				type="text"
				className="post-creator-title__input"
				placeholder="Напишите заголовок"
				value={titleInput.value}
				onChange={handlerChangeTitle}
			/>
			{validError && <span className="post-creator-title__error-valid">{validError}</span>}
			<Button classes="post-creator-title__btn-reset" handleClick={handlerResetTitle}>
				<Icon.ResetTest className="btn-icon" />
			</Button>
		</div>
	);
};

export default memo(PostCreatorTitle);
