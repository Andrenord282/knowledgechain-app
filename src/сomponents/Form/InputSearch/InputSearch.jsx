import useClasses from 'hooks/useClasses';
import Input from '../Input';
import InputSearchItemsList from '../InputSearchItemsList';
import './InputSearch.scss';

const InputSearch = (props) => {
	const {
		classes,
		openFilter,
		placeholder,
		id,
		name,
		currentValue,
		itemList,
		handlerBlur,
		handlerFocus,
		handlerChange,
		addItem,
	} = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' input-search'}>
			{openFilter && (
				<Input
					classes="input-search__input "
					placeholder={placeholder}
					id={id}
					name={name}
					value={currentValue}
					handlerBlur={handlerBlur}
					handlerFocus={handlerFocus}
					handlerChange={handlerChange}
				/>
			)}
			{itemList.length > 0 && (
				<InputSearchItemsList
					classes="input-search__values"
					itemList={itemList}
					addItem={addItem}
				/>
			)}
		</div>
	);
};

export default InputSearch;
