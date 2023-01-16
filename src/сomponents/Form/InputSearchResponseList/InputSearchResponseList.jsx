import useClasses from 'hooks/useClasses';

import Button from 'сomponents/Button';
import * as Icon from 'сomponents/_global/Icon';
import 'сomponents/FilterListSearch/FilterListSearch.scss';
import 'сomponents/Button/btn_filter-delete.scss';
import './InputSearchResponseList.scss';

const InputSearchResponseList = (props) => {
	const { classes, itemList, deleteItem } = props;
	const inheritClasses = useClasses(classes);

	return (
		<>
			{itemList.length > 0 && (
				<ul className={inheritClasses + ' input-search-response-list'}>
					{itemList.map((item, index) => {
						return (
							<li key={item} className="input-search-response-list__item">
								<Button
									data-index-item-list={index}
									classes="input-search-response-list__btn btn btn_default btn_filter-delete"
									handleClick={deleteItem}>
									<span className="btn__text">{item}</span>
									<Icon.Cross className="btn__icon" />
								</Button>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
};

export default InputSearchResponseList;
