import { useDispatch } from 'react-redux';
import { addFilterThemes, deleteFilterThemes } from '../../model';

const useAddDeleteTheme = (setValue, setItemList) => {
	const dispatch = useDispatch();

	const addItem = (e) => {
		const self = e.target;
		if (self.closest('.input-search-values__btn')) {
			const theme = self.textContent;
			dispatch(addFilterThemes({ theme }));
			setValue('');
			setItemList([]);
		}
	};

	const deleteItem = (e) => {
		const self = e.target;
		if (self.closest('[data-index-item-list]')) {
			const themeIndex = Number(self.closest('[data-index-item-list]').dataset.indexItemList);

			dispatch(deleteFilterThemes({ themeIndex }));
		}
	};

	return { addItem, deleteItem };
};

export default useAddDeleteTheme;
