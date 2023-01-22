import useClasses from 'hooks/useClasses';

import Button from 'сomponents/Button';
import * as Icon from 'сomponents/_global/Icon';
import './InputSearchItemsList.scss';

const InputSearchItemsList = (props) => {
	const { classes, itemList, addItem, idValue, nameValue, notFoundText } = props;
	const inheritClasses = useClasses(classes);
	return (
		<ul className={inheritClasses + ' input-search-values'}>
			{itemList.map((item) => {
				return (
					<li key={item[idValue]} className="input-search-values__item">
						{item[idValue] && (
							<Button
								classes="btn btn_default input-search-values__btn"
								handleClick={addItem}>
								<span className="btn__text">{item[nameValue]}</span>
								<Icon.Plus className="btn__icon" />
							</Button>
						)}
						{item[idValue] === null && (
							<div className="input-search-values__not-found">{notFoundText}</div>
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default InputSearchItemsList;
