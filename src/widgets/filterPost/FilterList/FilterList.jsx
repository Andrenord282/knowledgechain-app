import useClasses from 'hooks/useClasses';

import FilterAuthor from '../FilterAuthor';
import FilterThemes from '../FilterThemes';
import FilterRating from '../FilterRating';
import FilterDates from '../FilterDates';
import './FilterList.scss';

const FilterList = ({ classes }) => {
	const inheritClasses = useClasses(classes);

	return (
		<ul className={inheritClasses + ' filter-list'}>
			<li className="filter-list__item">
				<FilterAuthor />
			</li>
			<li className="filter-list__item">
				<FilterThemes />
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
