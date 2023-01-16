import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';
import useToggle from 'hooks/useToggle';
import useUpdateSchemaText from './hooks/useUpdateSchemaText';

import TextArea from 'сomponents/_global/TextArea/TextArea';
import Button from 'сomponents/_global/Button';
import * as Icon from 'сomponents/_global/Icon';
import PostCreatorOptions from '../PostCreatorOptions';
import classNames from 'classnames';
import './PostCreatorText.scss';

const PostCreatorText = (props) => {
	const { classes, schemItemIndex, variant, id, placeholder, moreText, last } =
		props;
	const inheritClasses = useClasses(classes);
	const { value, onChenge, onReset } = useInputChange('');
	const [optionsToggle, setOptionsToggle] = useToggle(false);
	const [focusToggle, setFocusToggle] = useToggle(false);
	useUpdateSchemaText(schemItemIndex, value);

	const focusClass = classNames({
		focus: focusToggle,
		'': !focusToggle,
	});

	return (
		<div className={inheritClasses + ' ' + focusClass + ' post-creater-text'}>
			<TextArea
				classes={'post-creater-text__text-area custom-focus'}
				value={value}
				placeholder={placeholder}
				handlerFocus={setFocusToggle}
				handlerBlur={setFocusToggle}
				handlerChange={onChenge}
			/>
			<Button classes="post-creater-text__btn-reset" handleClick={onReset}>
				<Icon.ResetText className="btn__icon" />
			</Button>
			{!last && variant === 'content' && (
				<div className="post-creater-text__nav">
					{optionsToggle && (
						<PostCreatorOptions
							classes="post-creater-text__options"
							schemItemIndex={schemItemIndex}
							idSchemaItem={id}
						/>
					)}
					<Button
						classes="post-creater-text__btn-toggle"
						handleClick={setOptionsToggle}>
						{!optionsToggle && <Icon.Plus className="btn__icon" />}
						{optionsToggle && <Icon.Minus className="btn__icon" />}
					</Button>
				</div>
			)}
			{last && (
				<div className="post-creater-text__nav">
					<PostCreatorOptions
						classes="post-creater-text__options"
						schemItemIndex={schemItemIndex}
						idSchemaItem={id}
						moreText={moreText}
						main
					/>
				</div>
			)}
		</div>
	);
};

export default PostCreatorText;
