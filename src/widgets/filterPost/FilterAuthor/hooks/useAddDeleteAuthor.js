import { useDispatch } from 'react-redux';
import { addFilterAuthor, deleteFilterAuthor } from '../../model';

const useAddDeleteAuthor = (setValue, setItemList) => {
	const dispatch = useDispatch();

	const addItem = (e) => {
		const self = e.target;
		if (self.closest('.input-search-values__btn')) {
			const author = self.textContent;
			dispatch(addFilterAuthor({ author }));
			setValue('');
			setItemList([]);
		}
	};

	const deleteItem = (e) => {
		const self = e.target;
		if (self.closest('[data-index-item-list]')) {
			const authorIndex = Number(
				self.closest('[data-index-item-list]').dataset.indexItemList,
			);

			dispatch(deleteFilterAuthor({ authorIndex }));
		}
	};

	return { addItem, deleteItem };
};

export default useAddDeleteAuthor;
