import useInheritClasses from 'hooks/useInheritClasses';
import useInputChange from 'hooks/useInputChange';

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateSchemeText, resetValueSchemeItem } from 'Redux/slices/newPostSlice';

import TextArea from 'сomponents/TextArea/TextArea';
import Button from 'сomponents/Button/Button';
import { ReactComponent as IconResetText } from 'assets/img/svg/icon-reset-text.svg';
import { ReactComponent as IconPlus } from 'assets/img/svg/icon-plus.svg';
import { ReactComponent as IconMinus } from 'assets/img/svg/icon-minus.svg';
import NewPostSchemeOptions from 'сomponents/NewPostSchemeOptions/NewPostSchemeOptions';

import 'reusableStyles/NewPostSchemeContent.scss';

const NewPostSchemeText = ({ inheritClasses, indexSchemItem, id, last }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	const dispatch = useDispatch();

	const text = useSelector(
		(state) => state.newPost.schemePost[indexSchemItem].value,
	);
	const [toggleOptions, setToggleOptions] = useState(false);
	const textState = useInputChange('');

	useEffect(() => {
		if (textState.value != text) {
			dispatch(updateSchemeText({ indexSchemItem, value: textState.value }));
		}
	}, [textState.value, text]);

	const handlerResetValueSchemeItem = () => {
		textState.setValue('');
		dispatch(resetValueSchemeItem({ indexSchemItem }));
	};

	const handlerToggleOptions = () => {
		setToggleOptions(!toggleOptions);
	};

	return (
		<div className={setInheritClasses + ' scheme-content'}>
			<TextArea
				inheritClasses={
					'scheme-content__text-area text-area_text custom-focus'
				}
				value={textState.value}
				placeholder="Напишите текст"
				handlerChange={textState.onChenge}
			/>
			<Button
				inheritClasses="scheme-content__btn-reset-text btn_scheme-reset-text"
				handleClick={handlerResetValueSchemeItem}>
				<IconResetText className="btn__icon" />
			</Button>
			{!last && (
				<div className="scheme-content__nav">
					{toggleOptions && (
						<NewPostSchemeOptions
							inheritClasses="scheme-content__options"
							indexSchemItem={indexSchemItem}
							idSchemeItem={id}
						/>
					)}
					<Button
						inheritClasses="scheme-content__btn-delete btn_scheme-options-toggle"
						handleClick={handlerToggleOptions}>
						{!toggleOptions && <IconPlus className="btn__icon" />}
						{toggleOptions && <IconMinus className="btn__icon" />}
					</Button>
				</div>
			)}
		</div>
	);
};

export default NewPostSchemeText;
