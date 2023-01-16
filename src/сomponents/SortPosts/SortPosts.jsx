import useClasses from 'hooks/useClasses';
import useEventOutside from 'hooks/useEventOutside';
import { useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
	sortSelector,
	setLoadedPost,
	setSortName,
	setSortOrder,
} from 'store/slices/optionsPostListSlice/optionsPostListSlice';
import { resetPostList } from 'store/slices/postList/postList';

import Button from 'сomponents/Button';
import { ReactComponent as IconTriangle } from 'assets/img/svg/icons-triangle.svg';
import classNames from 'classnames';
import 'сomponents/SortPosts/SortPosts.scss';

const SortPosts = ({ classes }) => {
	const dispatch = useDispatch();
	const inheritClasses = useClasses(classes);
	const refBtnSet = useRef(null);
	const { name, order } = useSelector(sortSelector);
	const [openSortList, setOpenSortList] = useState(false);

	useEventOutside(refBtnSet, () => setOpenSortList(false));

	const handlerOpenSortList = () => {
		setOpenSortList(!openSortList);
	};

	const handlerSetSortName = (e) => {
		const self = e.target;
		if (self.closest('[data-sort-name]')) {
			const sortName = self.closest('[data-sort-name]').textContent;
			const sortValue = self.closest('[data-sort-name]').dataset.sortName;
			dispatch(setSortName({ sortName, sortValue }));
			dispatch(setLoadedPost({ status: false }));
			dispatch(resetPostList());
		}
	};

	const handlerSetSortOrder = () => {
		order === 1
			? dispatch(setSortOrder({ sortOrder: -1 }))
			: dispatch(setSortOrder({ sortOrder: 1 }));
		dispatch(setLoadedPost({ status: false }));
		dispatch(resetPostList());
	};

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
					<li className="sort-posts__list-item" data-sort-name="createdAt">
						<Button
							classes="sort-posts__btn-list-item btn_list-item"
							handleClick={handlerSetSortName}>
							<span className="btn__text">Дате</span>
						</Button>
					</li>
					<li className="sort-posts__list-item" data-sort-name="ratingCounter">
						<Button
							classes="sort-posts__btn-list-item btn_list-item"
							handleClick={handlerSetSortName}>
							<span className="btn__text">Рейтингу</span>
						</Button>
					</li>
					<li className="sort-posts__list-item" data-sort-name="viewCounter">
						<Button
							classes="sort-posts__btn-list-item btn_list-item"
							handleClick={handlerSetSortName}>
							<span className="btn__text">Просмотрам</span>
						</Button>
					</li>
				</ul>
			</div>
			<Button
				classes="sort-posts__btn-order btn btn_sort-posts-order"
				handleClick={handlerSetSortOrder}>
				<span className="btn__text">{name}</span>
				<IconTriangle className={'btn__icon ' + orderBtnClass} />
			</Button>
		</div>
	);
};

export default SortPosts;
