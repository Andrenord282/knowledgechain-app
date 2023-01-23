import useClasses from 'hooks/useClasses';
import useQuerySortPosts from './hooks/useQuerySortPosts';
import useOpenSortList from './hooks/useOpenSortList';

import Button from 'сomponents/Button';
import * as Icon from 'сomponents/_global/Icon';
import classNames from 'classnames';
import './SortPosts.scss';

import { namesSortList } from './constants';

const SortPosts = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const { name, order, handlerSetSortName, handlerSetSortOrder } = useQuerySortPosts();
	const { openSortList, refBtnSet, handlerOpenSortList } = useOpenSortList();

	const orderBtnClass = classNames({
		active: order === 1,
		'': order === -1,
	});

	const listClass = classNames({
		open: openSortList,
		'': !openSortList,
	});

	return (
		<div className={inheritClasses + ' sort-posts'}>
			<div className="sort-posts__options">
				<Button
					valueRef={refBtnSet}
					classes="sort-posts__btn-set btn btn_default btn_sort-posts-set"
					handleClick={handlerOpenSortList}>
					<span className="btn__text">Соритровать по:</span>
				</Button>
				<ul className={'sort-posts__list ' + listClass}>
					{namesSortList.map((item) => {
						return (
							<li
								key={item.id}
								className="sort-posts__list-item"
								data-sort-name={item.dataAttrValue}>
								<Button
									classes="sort-posts__btn-list-item btn_list-item"
									handleClick={handlerSetSortName}>
									<span className="btn__text">{item.text}</span>
								</Button>
							</li>
						);
					})}
				</ul>
			</div>
			<Button
				classes="sort-posts__btn-order btn btn_sort-posts-order"
				handleClick={handlerSetSortOrder}>
				<span className="btn__text">{name}</span>
				<Icon.Triangle className={'btn__icon ' + orderBtnClass} />
			</Button>
		</div>
	);
};

export default SortPosts;
