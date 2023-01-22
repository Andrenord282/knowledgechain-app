import useClasses from 'hooks/useClasses';
import useToggle from 'hooks/useToggle';
import useSetRangeDates from './hooks/useSetRangeDates';
import useSetCustomDates from './hooks/useSetCustomDates';

import { useSelector } from 'react-redux';
import { selectDates } from '../model';

import { ReactComponent as IconPlus } from 'assets/img/svg/icon-plus.svg';
import Button from 'сomponents/Button';
import Input from 'сomponents/_global/Input/Input';
import classNames from 'classnames';
import './FilterDates.scss';

const FilterDates = ({ classes }) => {
	const inheritClasses = useClasses(classes);
	const dates = useSelector(selectDates);
	const [openToggle, setOpenToggle] = useToggle(false);
	const { activeBtn, handlerSetRangeDates } = useSetRangeDates();
	const { startDate, endDate } = useSetCustomDates();
	console.log(dates);
	const datesBtnClass = classNames({
		'btn btn_default filter-dates__btn-list active': activeBtn,
		'': activeBtn === null,
	});

	const btnOpenClass = classNames({
		active: openToggle,
		'': !openToggle,
	});

	return (
		<div className={inheritClasses + ' filter-dates'}>
			<Button
				classes={btnOpenClass + ' btn filter-dates__toggle'}
				handleClick={setOpenToggle}>
				<span className="btn__wrapper-icon">
					<IconPlus className="btn__icon" />
				</span>
				<span className="btn__text">Дата:</span>
			</Button>
			<div className="filter-dates__nav">
				{openToggle && (
					<ul className="filter-dates__list">
						<li className="filter-dates__iten-list" data-type-dates="day">
							<Button
								classes={
									activeBtn === 'day'
										? datesBtnClass
										: 'btn btn_default filter-dates__btn-list'
								}
								handleClick={handlerSetRangeDates}>
								<span className="btn__wrapper-icon"></span>
								<span className="btn__text">День</span>
							</Button>
						</li>
						<li className="filter-dates__iten-list" data-type-dates="week">
							<Button
								classes={
									activeBtn === 'week'
										? datesBtnClass
										: 'btn btn_default filter-dates__btn-list'
								}
								handleClick={handlerSetRangeDates}>
								<span className="btn__wrapper-icon"></span>
								<span className="btn__text">Неделя</span>
							</Button>
						</li>
						<li className="filter-dates__iten-list" data-type-dates="month">
							<Button
								classes={
									activeBtn === 'month'
										? datesBtnClass
										: 'btn btn_default filter-dates__btn-list'
								}
								handleClick={handlerSetRangeDates}>
								<span className="btn__wrapper-icon"></span>
								<span className="btn__text">Месяц</span>
							</Button>
						</li>
						<li className="filter-dates__iten-list" data-type-dates="custom">
							<Button
								classes={
									activeBtn === 'custom'
										? datesBtnClass
										: 'btn btn_default filter-dates__btn-list'
								}
								handleClick={handlerSetRangeDates}>
								<span className="btn__wrapper-icon"></span>
								<span className="btn__text">Точная дата</span>
							</Button>
						</li>
					</ul>
				)}
				{activeBtn === 'custom' && (
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
			</div>
			{dates.length > 0 && (
				<div className="filter-dates__search-value">
					Искать с {dates[0]} до {dates[1]}
				</div>
			)}
		</div>
	);
};

export default FilterDates;
