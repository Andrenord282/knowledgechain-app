import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setFilterRating } from 'store/slices/optionsPostListSlice/optionsPostListSlice';

import { ReactComponent as IconPlus } from 'assets/img/svg/icon-plus.svg';
import Button from 'сomponents/_global/Button';
import InputRange from 'сomponents/_global/InputRange/InputRange';
import classNames from 'classnames';
import 'сomponents/FilterRating/FilterRating.scss';
import 'сomponents/_global/Button/btn_filter-open.scss';

const FilterRating = ({ classes }) => {
	const inheritClasses = useClasses(classes);
	const dispatch = useDispatch();
	const [openFilter, setOpenFilter] = useState(false);
	const rating = useInputChange('');

	const handlerToggleFilter = () => {
		setOpenFilter(!openFilter);
	};

	useEffect(() => {
		dispatch(setFilterRating({ rating: rating.value }));
	}, [rating, dispatch]);

	const filterBtnClass = classNames({
		active: openFilter,
		'': !openFilter,
	});

	return (
		<div className={inheritClasses + 'filter-rating'}>
			<Button
				classes={
					filterBtnClass +
					' filter-rating__btn-open btn btn_filter-open'
				}
				handleClick={handlerToggleFilter}>
				<span className="btn__wrapper-icon">
					<IconPlus className="btn__icon" />
				</span>
				<span className="btn__text">Рейтинг:</span>
			</Button>
			{openFilter && (
				<div className="filter-author__query">
					<InputRange
						classes="filter-rating__input"
						id="filter-rating"
						name="filter-rating"
						min={-200}
						max={8000}
						value={rating.value}
						step={100}
						handlerChange={rating.onChenge}
					/>
					<div className="filter-rating__value">от: {rating.value}</div>
				</div>
			)}
		</div>
	);
};

export default FilterRating;
