import useClasses from 'hooks/useClasses';

import FilterAuthor from 'сomponents/FilterAuthor/FilterAuthor';
import FilterDates from 'сomponents/FilterDates/FilterDates';
import FilterRating from 'сomponents/FilterRating/FilterRating';
import 'сomponents/FilterList/FilterList.scss';

const FilterList = ({ classes }) => {
	const inheritClasses = useClasses(classes);

	return (
		<ul className={inheritClasses + ' filter-list'}>
			<li className="filter-list__item">
				<FilterAuthor />
			</li>
			<li className="filter-list__item">
				<FilterRating />
			</li>
			<li className="filter-list__item">
				<FilterDates />
			</li>
		</ul>
	);
};

export default FilterList;
