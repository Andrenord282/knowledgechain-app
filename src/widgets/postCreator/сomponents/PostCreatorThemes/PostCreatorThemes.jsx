import useClasses from 'hooks/useClasses';
import useEventOutside from 'hooks/useEventOutside';
import useToggle from 'hooks/useToggle';
import useSearchList from './hooks/useSearchList';
import useSearchItem from './hooks/useSearchItem';
import useThemes from './hooks/useThemes';
import { useRef } from 'react';

import InputSearch from 'сomponents/Form/InputSearch';
import InputSearchResponseList from 'сomponents/Form/InputSearchResponseList';
import classNames from 'classnames';
import './PostCreatorThemes.scss';

const PostCreatorThemes = (proops) => {
	const { classes } = proops;
	const inheritClasses = useClasses(classes);
	const creatorThemesRef = useRef(null);
	const [focusToggle, setFocusToggle] = useToggle(false);
	const { value, itemList, onChenge, setValue, setItemList } = useSearchList('');
	const { addItem, deleteItem } = useSearchItem(setValue, setItemList);
	const themes = useThemes();
	useEventOutside(creatorThemesRef, () => {
		setValue('');
		setItemList([]);
	});

	const focusClass = classNames({
		focus: focusToggle,
		'': !focusToggle,
	});

	return (
		<div
			ref={creatorThemesRef}
			className={inheritClasses + ' post-creator-themes ' + focusClass}>
			<InputSearch
				id="Тема"
				name="Тема"
				itemList={itemList}
				placeholder="Напишите текст"
				openFilter={true}
				currentValue={value}
				handlerChange={onChenge}
				handlerFocus={setFocusToggle}
				handlerBlur={setFocusToggle}
				addItem={addItem}
			/>
			<InputSearchResponseList deleteItem={deleteItem} itemList={themes} />
		</div>
	);
};

export default PostCreatorThemes;
