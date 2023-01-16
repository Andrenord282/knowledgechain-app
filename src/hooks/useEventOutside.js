import { useEffect } from 'react';

const useEventOutside = (ref, handler, cl, event = 'click') => {
	useEffect(() => {
		const action = (e) => {
			if (!ref.current || ref.current.contains(e.target)) {
				return;
			}
			handler();
		};
		document.addEventListener(`${event}`, action);

		return () => {
			document.removeEventListener(`${event}`, action);
		};
	}, [ref, event, handler]);
};

export default useEventOutside;
