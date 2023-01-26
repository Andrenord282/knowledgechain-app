import { useDispatch } from 'react-redux';
import { resertAllFilters } from 'widgets/filterPost/model';

const useResetFilterPosts = () => {
	const dispatch = useDispatch();
	return () => {
		dispatch(resertAllFilters());
	};
};

export default useResetFilterPosts;
