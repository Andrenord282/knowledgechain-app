import { useEffect, useRef } from 'react';

const useEventInside = (ref, callback, eventName = 'click') => {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const handleClickInside = (e) => {
			if (ref.current && ref.current.contains(e.target)) {
				callbackRef.current();
			}
		};

		document.addEventListener(eventName, handleClickInside);

		return () => {
			document.removeEventListener(eventName, handleClickInside);
		};
	}, [ref, eventName]);
};

export default useEventInside;
