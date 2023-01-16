import { useDispatch } from 'react-redux';
import { pushThemePost, deleteThemePost } from '../../../model';

const useSearchItem = (setValue, setItemList) => {
	const dispatch = useDispatch();

	const addItem = (e) => {
		const self = e.target;
		if (self.closest('.btn_filter-add')) {
			const theme = self.textContent;
			dispatch(pushThemePost({ theme }));
			setValue('');
			setItemList([]);
		}
	};

	const deleteItem = (e) => {
		const self = e.target;
		if (self.closest('[data-index-item-list]')) {
			const themeIndex = Number(self.closest('[data-index-item-list]').dataset.indexItemList);
			dispatch(deleteThemePost({ themeIndex }));
		}
	};

	return { addItem, deleteItem };
};

export default useSearchItem;
