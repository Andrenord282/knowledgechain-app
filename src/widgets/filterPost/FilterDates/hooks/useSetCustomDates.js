import useInputChange from 'hooks/useInputChange';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addCustomFilterDates } from '../../model';

const useSetCustomDates = () => {
	const dispatch = useDispatch();
	const startDate = useInputChange(null);
	const endDate = useInputChange(null);

	useEffect(() => {
		if (startDate.value || endDate.value)
			dispatch(addCustomFilterDates({ startDate: startDate.value, endDate: endDate.value }));
	}, [startDate.value, endDate.value]);

	return { startDate, endDate };
};

export default useSetCustomDates;
