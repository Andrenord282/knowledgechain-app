import useClasses from 'hooks/useClasses';
import useToggle from 'hooks/useToggle';
import useSearchAuthorList from './hooks/useSearchAuthorList';
import useAddDeleteAuthor from './hooks/useAddDeleteAuthor';
import useEventOutside from 'hooks/useEventOutside';
import useSelectAuthors from './hooks/useSelectAuthors';
import { useRef } from 'react';

import * as Icon from 'сomponents/_global/Icon';
import Button from 'сomponents/Button';
import InputSearch from 'сomponents/Form/InputSearch';
import InputSearchResponseList from 'сomponents/Form/InputSearchResponseList';
import classNames from 'classnames';
import './FilterAuthor.scss';

const FilterAuthor = (proops) => {
	const { classes } = proops;
	const inheritClasses = useClasses(classes);
	const creatorAuthorRef = useRef(null);
	const authors = useSelectAuthors();
	const [openToggle, setOpenToggle] = useToggle(false);
	const [focusToggle, setFocusToggle] = useToggle(false);
	const { value, itemList, onChenge, setValue, setItemList } = useSearchAuthorList('');
	const { addItem, deleteItem } = useAddDeleteAuthor(setValue, setItemList);

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
		<div className={inheritClasses + ' filter-author'}>
			<Button
				classes={btnOpenClass + ' btn  filter-author__toggle'}
				handleClick={setOpenToggle}>
				<span className="btn__wrapper-icon">
					<Icon.Plus className="btn__icon" />
				</span>
				<span className="btn__text">Автор:</span>
			</Button>
			<div ref={creatorAuthorRef} className={'filter-author__nav ' + focusClass}>
				<InputSearch
					id="filter-author"
					name="filter-author"
					itemList={itemList}
					placeholder="Напишите ник"
					nameValue="userName"
					idValue="_id"
					openFilter={openToggle}
					currentValue={value}
					notFoundText="Пользователь не найдет"
					handlerChange={onChenge}
					handlerFocus={setFocusToggle}
					handlerBlur={setFocusToggle}
					addItem={addItem}
				/>
				<InputSearchResponseList deleteItem={deleteItem} itemList={authors} />
			</div>
		</div>
	);
};

export default FilterAuthor;
