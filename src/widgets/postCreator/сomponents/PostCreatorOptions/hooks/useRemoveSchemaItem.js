import { useDispatch } from 'react-redux';
import { removeSchemaItem } from '../../../model';

const useRemoveSchemaItem = (idSchemaItem) => {
	const dispatch = useDispatch();

	return () => {
		dispatch(removeSchemaItem({ idSchemaItem }));
	};
};

export default useRemoveSchemaItem;
