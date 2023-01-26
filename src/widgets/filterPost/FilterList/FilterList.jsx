import useClasses from 'hooks/useClasses';
import useQueryFilterPosts from './hooks/useQueryFilterPosts';
import useResetFilterPosts from './hooks/useResetFilterPosts';

import FilterAuthor from '../FilterAuthor';
import FilterThemes from '../FilterThemes';
import FilterRating from '../FilterRating';
import FilterDates from '../FilterDates';
import Button from 'сomponents/Button';

import './FilterList.scss';

const FilterList = ({ classes }) => {
	const inheritClasses = useClasses(classes);
	const handlerQueryFilterPosts = useQueryFilterPosts();
	const handlerResetFilterPosts = useResetFilterPosts();

	return (
		<>
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
			<div className="filter-list__nav">
				<Button
					classes="filter-list__search-btn btn btn_default"
					handleClick={handlerQueryFilterPosts}>
					<span className="btn__text">Поиск</span>
				</Button>
				<Button
					classes="filter-list__search-btn btn btn_default"
					handleClick={handlerResetFilterPosts}>
					<span className="btn__text">Сбросить</span>
				</Button>
			</div>
		</>
	);
};

export default FilterList;
