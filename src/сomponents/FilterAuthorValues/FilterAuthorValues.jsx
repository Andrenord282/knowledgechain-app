import useClasses from 'hooks/useClasses';

import Button from '../_global/Button';
import { ReactComponent as IconPlus } from 'assets/img/svg/icon-plus.svg';
import 'сomponents/FilterAuthorValues/FilterAuthorValues.scss';
import 'сomponents/_global/Button/btn_filter-add.scss';

const FilterAuthorValues = ({ classes, filterAuthor, addAuthor }) => {
	const inheritClasses = useClasses(classes);

	return (
		<ul className={inheritClasses + ' filter-author-values'}>
			{filterAuthor.map((value) => {
				if (typeof value === 'string') {
					return (
						<li
							key={value}
							className="filter-author-values__item filter-author-values__item-not-found">
							{value}
						</li>
					);
				}
				if (typeof value === 'object') {
					return (
						<li key={value._id} className="filter-author-values__item">
							<Button
								classes="filter-author-values__btn-add btn btn_default btn_filter-add"
								handleClick={addAuthor}>
								<span className="btn__text">{value.userName}</span>
								<IconPlus className="btn__icon" />
							</Button>
						</li>
					);
				}
			})}
		</ul>
	);
};

export default FilterAuthorValues;
