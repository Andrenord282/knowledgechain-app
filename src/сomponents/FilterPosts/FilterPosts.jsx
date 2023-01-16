import useClasses from 'hooks/useClasses';
import { useState } from 'react';

import FilterList from 'сomponents/FilterList/FilterList';
import Button from 'сomponents/Button';
import { ReactComponent as IconCross } from 'assets/img/svg/icon-close.svg';
import classNames from 'classnames';
import 'сomponents/FilterPosts/FilterPosts.scss';

const FilterPosts = ({ classes }) => {
	const inheritClasses = useClasses(classes);
	const [openFilterList, setFilterList] = useState(true);

	const handlerOpenFilterList = () => {
		setFilterList(!openFilterList);
	};

	const filterBtnClass = classNames({
		active: openFilterList,
		'': !openFilterList,
	});

	return (
		<div className={inheritClasses + ' filter-posts'}>
			<Button
				classes={
					'filter-posts__btn-set btn btn_default btn_filter-posts-set ' +
					filterBtnClass
				}
				handleClick={handlerOpenFilterList}>
				<span className="btn__text">Расширенный поиск</span>
				<IconCross className={'btn__icon '} />
			</Button>
			{openFilterList && (
				<FilterList classes="filter-posts__list" />
			)}
		</div>
	);
};

export default FilterPosts;
