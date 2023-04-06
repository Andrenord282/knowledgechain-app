import { useEffect, useRef } from 'react';

function useEventOutside(ref, callback, eventName = 'click') {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		function handleClickOutside(e) {
			if (ref.current && !ref.current.contains(e.target)) {
				callbackRef.current(e);
			}
		}

		document.addEventListener(eventName, handleClickOutside);
		return () => {
			document.removeEventListener(eventName, handleClickOutside);
		};
	}, [ref]);
}

export default useEventOutside;
