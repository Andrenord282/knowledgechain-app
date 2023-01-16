import useClasses from 'hooks/useClasses';
import { memo } from 'react';

import Button from 'сomponents/_global/Button';
import { ReactComponent as IconCross } from 'assets/img/svg/icon-cross.svg';
import 'сomponents/FilterListSearch/FilterListSearch.scss';
import 'сomponents/_global/Button/btn_filter-delete.scss';

const FilterListSearch = ({ classes, list, deleteItem }) => {
	const inheritClasses = useClasses(classes);

	return (
		<>
			{list.length > 0 && (
				<ul className={inheritClasses + ' filter-list-search'}>
					{list.map((itemList, index) => {
						return (
							<li
								key={itemList}
								className="filter-list-search__item"
								data-index-item-list={index}>
								<Button
									classes="filter-list-search__btn-delete btn btn_default btn_filter-delete"
									handleClick={deleteItem}>
									<span className="btn__text">{itemList}</span>
									<IconCross className="btn__icon" />
								</Button>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
};

export default memo(FilterListSearch);
