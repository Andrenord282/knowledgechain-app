import useInheritClasses from 'hooks/useInheritClasses';

import { useState } from 'react';

import { useSelector } from 'react-redux';

import Button from 'сomponents/Button/Button';
import { ReactComponent as IconPlus } from 'assets/img/svg/icon-plus.svg';
import { ReactComponent as IconMinus } from 'assets/img/svg/icon-minus.svg';
import NewPostSchemeOptions from 'сomponents/NewPostSchemeOptions/NewPostSchemeOptions';

import classNames from 'classnames';
import 'reusableStyles/NewPostSchemeContent.scss';

const NewPostSchemeImage = ({ inheritClasses, indexSchemItem, id, last }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);

	const dataUrl = useSelector(
		(state) => state.newPost.schemePost[indexSchemItem].dataUrl,
	);
	const [toggleOptions, setToggleOptions] = useState(false);

	const setImgClasses = classNames({
		last: last,
		'': !last,
	});

	const handlerToggleOptions = () => {
		setToggleOptions(!toggleOptions);
	};

	return (
		<div className={setInheritClasses + ' scheme-content'}>
			<img
				src={dataUrl}
				alt=""
				className={'scheme-content__img ' + setImgClasses}
			/>
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

export default NewPostSchemeImage;
