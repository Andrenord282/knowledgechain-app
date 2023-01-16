import useClasses from 'hooks/useClasses';

import Button from 'сomponents/Button';
import * as Icon from 'сomponents/_global/Icon';
import 'сomponents/Button/btn_filter-add.scss';
import './InputSearchItemsList.scss';

const InputSearchItemsList = (props) => {
	const { classes, itemList, addItem } = props;
	const inheritClasses = useClasses(classes);
	return (
		<ul className={inheritClasses + ' input-search-values'}>
			{itemList.map((item) => {
				return (
					<li key={item._id} className="input-search-values__item">
						<Button
							classes="btn btn_default btn_filter-add input-search-values__btn"
							handleClick={addItem}>
							<span className="btn__text">{item.name}</span>
							<Icon.Plus className="btn__icon" />
						</Button>
					</li>
				);
			})}
		</ul>
	);
};

export default InputSearchItemsList;
