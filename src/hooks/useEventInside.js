import { useEffect, useRef } from 'react';

const useEventInside = (ref, callback, eventName = 'click') => {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (ref.current && ref.current.contains(e.target)) {
				callbackRef.current(e);
			}
		};

		document.addEventListener(eventName, handleClickOutside);

		return () => {
			document.removeEventListener(eventName, handleClickOutside);
		};
	}, [ref]);
};

export default useEventInside;
