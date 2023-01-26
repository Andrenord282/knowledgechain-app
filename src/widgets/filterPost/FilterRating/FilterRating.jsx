import useClasses from 'hooks/useClasses';
import useToggle from 'hooks/useToggle';
import useSetRating from './hooks/useSetRating';

import * as Icon from 'сomponents/_global/Icon';
import Button from 'сomponents/Button';
import InputRange from 'сomponents/_global/InputRange/InputRange';
import classNames from 'classnames';
import './FilterRating.scss';

const FilterRating = ({ classes }) => {
	const inheritClasses = useClasses(classes);
	const [openToggle, setOpenToggle] = useToggle(false);
	const { valueRatingStore, valueRatingState, handlerChaneRating } = useSetRating();

	const btnOpenClass = classNames({
		active: openToggle,
		'': !openToggle,
	});

	return (
		<div className={inheritClasses + 'filter-rating'}>
			<Button
				classes={btnOpenClass + 'btn filter-rating__toggle'}
				handleClick={setOpenToggle}>
				<span className="btn__wrapper-icon">
					<Icon.Plus className="btn__icon" />
				</span>
				<span className="btn__text">Рейтинг:</span>
			</Button>
			{openToggle && (
				<div className="filter-rating__nav">
					<InputRange
						id="filter-rating"
						name="filter-rating"
						min={-200}
						max={8000}
						value={valueRatingState}
						step={100}
						handlerChange={handlerChaneRating}
					/>
					<span>рейтинг от -200 до 8000</span>
				</div>
			)}
			{valueRatingStore && <div className="filter-rating__value">от: {valueRatingStore}</div>}
		</div>
	);
};

export default FilterRating;
