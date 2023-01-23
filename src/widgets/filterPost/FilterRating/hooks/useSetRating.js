import useInputChange from 'hooks/useInputChange';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setFilterRating } from '../../model';

const useSetRating = () => {
	const dispatch = useDispatch();
	const { value, onChenge } = useInputChange();

	useEffect(() => {
		dispatch(setFilterRating({ rating: value }));
	}, [value]);

	return {
		value,
		onChenge,
	};
};

export default useSetRating;
