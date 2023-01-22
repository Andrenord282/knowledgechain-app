import { useState, useEffect } from 'react';
import useDebounce from 'hooks/useDebounce';

import searchService from 'services/searchService';

const useSearchThemeList = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const [itemList, setItemList] = useState([]);

	const debounsSearch = useDebounce(searchService.searchValue, 500);

	const onChenge = (e) => {
		setValue(e.target.value);
		if (e.target.value.length < 2) {
			return;
		}
		debounsSearch('themes', { value: e.target.value, variant: 'filterPost' }, setItemList);
	};

	useEffect(() => {
		if (value.length === 0) {
			setItemList([]);
		}
	}, [value]);

	return { value, setValue, itemList, setItemList, onChenge };
};

export default useSearchThemeList;
