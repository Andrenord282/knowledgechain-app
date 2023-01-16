import useClasses from 'hooks/useClasses';

import FilterListDatesItem from 'сomponents/FilterListDatesItem/FilterListDatesItem';

import 'сomponents/FilterListDates/FilterListDates.scss';

const FilterListDates = ({ classes, openCustomFilter }) => {
	const inheritClasses = useClasses(classes);

	return (
		<ul className={inheritClasses + ' filter-list-dates'}>
			<FilterListDatesItem
				classes="filter-list-dates__item"
				dataAttrValue={'day'}
				text="Сутки"
			/>
			<FilterListDatesItem
				classes="filter-list-dates__item"
				dataAttrValue={'week'}
				text="Неделя"
			/>
			<FilterListDatesItem
				classes="filter-list-dates__item"
				dataAttrValue={'month'}
				text="Месяц"
			/>
			<FilterListDatesItem
				classes="filter-list-dates__item"
				dataAttrValue={'custom'}
				text="Точные даты"
				openCustomFilter={openCustomFilter}
			/>
		</ul>
	);
};

export default FilterListDates;
