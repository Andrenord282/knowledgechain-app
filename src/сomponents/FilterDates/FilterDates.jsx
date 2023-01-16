import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addFilterDates, datesSelector } from 'store/slices/optionsPostListSlice/optionsPostListSlice';

import { datesDifference } from 'hooks/useDate';

import { ReactComponent as IconPlus } from 'assets/img/svg/icon-plus.svg';
import Button from 'сomponents/Button';
import Input from 'сomponents/_global/Input/Input';
import classNames from 'classnames';
import 'сomponents/FilterDates/FilterDates.scss';
import 'сomponents/FilterListDates/FilterListDates.scss';
import 'сomponents/Button/btn_filter-add.scss';

const FilterDates = ({ classes }) => {
	const inheritClasses = useClasses(classes);
	const dispatch = useDispatch();
	const dates = useSelector(datesSelector);
	const [openFilter, setOpenFilter] = useState(false);
	const [openCustomFilter, setCustomFilter] = useState(false);
	const [activeBtn, setActivBtn] = useState(false);
	const startDate = useInputChange(null);
	const endDate = useInputChange(null);

	const handlerToggleFilter = () => {
		setOpenFilter(!openFilter);
		if (openCustomFilter) {
			setCustomFilter(false);
		}
	};

	const handlerCustomFilter = () => {
		setCustomFilter(!openCustomFilter);
	};

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

	useEffect(() => {
		const dates = [];
		// dispatch(addFilterDates({ dates }));
	}, [startDate.value, endDate.value, dispatch]);

	const datesBtnClass = classNames({
		active: activeBtn,
		'': !activeBtn,
	});

	const filterBtnClass = classNames({
		active: openFilter,
		'': !openFilter,
	});

	return (
		<div className={inheritClasses + ' filter-dates'}>
			<Button
				classes={
					filterBtnClass +
					' filter-dates__btn-open btn btn_default btn_filter-open'
				}
				handleClick={handlerToggleFilter}>
				<span className="btn__wrapper-icon">
					<IconPlus className="btn__icon" />
				</span>
				<span className="btn__text">Дата:</span>
			</Button>
			{openFilter && (
				<ul className={inheritClasses + ' filter-list-dates'}>
					<li className="filter-list-dates__item" data-type-dates="day">
						<Button
							classes={
								datesBtnClass +
								' filter-list-dates__btn-add btn btn_default btn_filter-add'
							}
							handleClick={handlerSetDate}>
							<span className="btn__wrapper-icon"></span>
							<span className="btn__text">День</span>
						</Button>
					</li>
					<li className="filter-list-dates__item" data-type-dates="week">
						<Button
							classes={
								datesBtnClass +
								' filter-list-dates__btn-add btn btn_default btn_filter-add'
							}
							handleClick={handlerSetDate}>
							<span className="btn__wrapper-icon"></span>
							<span className="btn__text">Неделя</span>
						</Button>
					</li>
					<li className="filter-list-dates__item" data-type-dates="month">
						<Button
							classes={
								datesBtnClass +
								' filter-list-dates__btn-add btn btn_default btn_filter-add'
							}
							handleClick={handlerSetDate}>
							<span className="btn__wrapper-icon"></span>
							<span className="btn__text">Месяц</span>
						</Button>
					</li>
					<li className="filter-list-dates__item" data-type-dates="custom">
						<Button
							classes={
								datesBtnClass +
								' filter-list-dates__btn-add btn btn_default btn_filter-add'
							}
							handleClick={handlerCustomFilter}>
							<span className="btn__wrapper-icon"></span>
							<span className="btn__text">Точная дата</span>
						</Button>
					</li>
				</ul>
			)}
			{openCustomFilter && (
				<div className="filter-dates__custom">
					<span className="filter-dates__custom-span">от:</span>
					<Input
						classes="filter-dates__custom-input"
						name="startDate"
						type="text"
						value={startDate.value}
						placeholder="дд.мм.ггггг"
						handlerChange={startDate.onChenge}
					/>
					<span className="filter-dates__custom-span">до:</span>
					<Input
						classes="filter-dates__custom-input"
						name="endDate"
						type="text"
						value={endDate.value}
						placeholder="дд.мм.ггггг"
						handlerChange={endDate.onChenge}
					/>
				</div>
			)}
			{dates.length > 0 && (
				<div className="filter-dates__search-value">
					Искать с {dates[0]} до {dates[1]}
				</div>
			)}
		</div>
	);
};

export default FilterDates;
