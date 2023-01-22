import useClasses from 'hooks/useClasses';
import useToggle from 'hooks/useToggle';
import useSearchThemeList from './hooks/useSearchThemeList';
import useAddDeleteTheme from './hooks/useAddDeleteTheme';
import useEventOutside from 'hooks/useEventOutside';
import useSelectThemes from './hooks/useSelectThemes';
import { useRef } from 'react';

import * as Icon from 'сomponents/_global/Icon';
import Button from 'сomponents/Button';
import InputSearch from 'сomponents/Form/InputSearch';
import InputSearchResponseList from 'сomponents/Form/InputSearchResponseList';
import classNames from 'classnames';
import './FilterThemes.scss';

const FilterThemes = (proops) => {
	const { classes } = proops;
	const inheritClasses = useClasses(classes);
	const creatorAuthorRef = useRef(null);
	const themes = useSelectThemes();
	const [openToggle, setOpenToggle] = useToggle(false);
	const [focusToggle, setFocusToggle] = useToggle(false);
	const { value, itemList, onChenge, setValue, setItemList } = useSearchThemeList('');
	const { addItem, deleteItem } = useAddDeleteTheme(setValue, setItemList);

	useEventOutside(creatorAuthorRef, () => {
		setValue('');
		setItemList([]);
	});

	const focusClass = classNames({
		focus: focusToggle,
		'': !focusToggle,
	});

	const btnOpenClass = classNames({
		active: openToggle,
		'': !openToggle,
	});

	return (
		<div className={inheritClasses + ' filter-themes'}>
			<Button
				classes={btnOpenClass + ' btn  filter-themes__toggle'}
				handleClick={setOpenToggle}>
				<span className="btn__wrapper-icon">
					<Icon.Plus className="btn__icon" />
				</span>
				<span className="btn__text">Тема:</span>
			</Button>
			<div ref={creatorAuthorRef} className={'filter-themes__nav ' + focusClass}>
				<InputSearch
					id="filter-themes"
					name="filter-themes"
					itemList={itemList}
					placeholder="Напишите тему"
					nameValue="name"
					idValue="_id"
					openFilter={openToggle}
					currentValue={value}
					notFoundText="Тема не найдена"
					handlerChange={onChenge}
					handlerFocus={setFocusToggle}
					handlerBlur={setFocusToggle}
					addItem={addItem}
				/>
				<InputSearchResponseList deleteItem={deleteItem} itemList={themes} />
			</div>
		</div>
	);
};

export default FilterThemes;
