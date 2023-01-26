import useInputChange from 'hooks/useInputChange';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFilterRating, selectFilterRatingCounter } from '../../model';

const useSetRating = () => {
	const dispatch = useDispatch();
	const valueRatingStore = useSelector(selectFilterRatingCounter);
	const { valueRatingState, setValue } = useInputChange();

	useEffect(() => {
		dispatch(setFilterRating({ rating: valueRatingStore }));
	}, [valueRatingStore]);

	const handlerChaneRating = (e) => {
		dispatch(setFilterRating({ rating: e.target.value }));
		setValue(valueRatingStore);
	};

	return {
		valueRatingStore,
		valueRatingState,
		handlerChaneRating,
	};
};

export default useSetRating;
