import useEventOutside from 'hooks/useEventInside';
import useClasses from 'hooks/useClasses';
import { useRef, useState } from 'react';

import Button from 'сomponents/_global/Button';
import IconTriangle from '../Icons/IconTriangle';
import { ReactComponent as IconTriangle } from 'assets/img/svg/icons-triangle.svg';
import classNames from 'classnames';
import './Select.scss';

const Select = ({ classes, label, options, data }) => {
	const inheritClasses = useClasses(classes);
	const refBtnOpen = useRef(null);

	const [openSelect, setOpenSelect] = useState(false);

	useEventOutside(refBtnOpen, () => {
		setOpenSelect(false);
	});
	const handlerOpenSelect = () => {
		setOpenSelect(!openSelect);
	};

	const handlerSelected = () => {};

	const setListClass = classNames({
		open: openSelect,
		'': !openSelect,
	});

	const setBtnSelectedClass = classNames({
		active: openSelect,
		'': !openSelect,
	});

	return (
		<div className={inheritClasses + ' select'}>
			<Button
				valueRef={refBtnOpen}
				classes={
					setBtnSelectedClass +
					' select__btn-selected btn_list-item btn_option-select'
				}
				handleClick={handlerOpenSelect}>
				<IconTriangle className={'btn__icon ' + setBtnSelectedClass} />
				<span className="btn__text">{label + ':'}</span>
			</Button>
			<ul className={setListClass + ' select__list'}>
				{options.map((option) => {
					// const setActiveOptionClass = classNames({
					// 	active: option.name === label,
					// 	'': !option.name === label,
					// });
					return (
						<li key={option.name} className="select__option">
							<Button
								classes={' select__btn-option btn_list-item'}
								handleClick={handlerSelected}>
								<span className="btn__text">{option.name}</span>
							</Button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Select;
