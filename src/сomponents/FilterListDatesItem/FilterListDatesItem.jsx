import useClasses from 'hooks/useClasses';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addFilterDates } from 'store/slices/optionsPostListSlice/optionsPostListSlice';

import { datesDifference } from 'hooks/useDate';

import Button from 'сomponents/_global/Button';
import classNames from 'classnames';
import 'сomponents/_global/Button/btn_filter-add.scss';

const FilterListDatesItem = ({ classes, dataAttrValue, text }) => {
	const inheritClasses = useClasses(classes);
	const dispatch = useDispatch();
	const [activeBtn, setActivBtn] = useState(false);

	const handlerSetDate = (e) => {
		const self = e.target;
		if (self.closest('[data-type-dates]') && !activeBtn) {
			const typeDates = self.closest('[data-type-dates]').dataset.typeDates;
			const dates = datesDifference({ typeDates });
			dispatch(addFilterDates({ dates }));
			setActivBtn(!activeBtn);
		} else {
			dispatch(addFilterDates({ dates: [] }));
			setActivBtn(!activeBtn);
		}
	};

	const datesBtnClass = classNames({
		active: activeBtn,
		'': !activeBtn,
	});

	return (
		<li className={inheritClasses} data-type-dates={dataAttrValue}>
			<Button
				classes={
					datesBtnClass +
					' filter-list-dates__btn-add btn btn_default btn_filter-add'
				}
				handleClick={handlerSetDate}>
				<span className="btn__wrapper-icon"></span>
				<span className="btn__text">{text}</span>
			</Button>
		</li>
	);
};

export default FilterListDatesItem;
