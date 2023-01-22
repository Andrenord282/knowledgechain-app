import useRangeDates from './useRangeDates';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addFilterDates } from '../../model';

const useSetRangeDates = () => {
	const dispatch = useDispatch();
	const setRangeDates = useRangeDates();
	const [activeBtn, setActivBtn] = useState(null);

	const handlerSetRangeDates = (e) => {
		const self = e.target;
		if (self.closest('[data-type-dates]')) {
			const typeDates = self.closest('[data-type-dates]').dataset.typeDates;
			const dates = setRangeDates({ typeDates });
			switch (true) {
				case typeDates === activeBtn:
					dispatch(addFilterDates({ dates: [] }));
					setActivBtn(null);
					break;
				case typeDates !== activeBtn:
					dispatch(addFilterDates({ dates }));
					setActivBtn(typeDates);
					break;
			}
		}
	};

	return { activeBtn, handlerSetRangeDates };
};

export default useSetRangeDates;
