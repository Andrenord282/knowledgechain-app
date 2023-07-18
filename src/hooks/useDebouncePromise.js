import { useCallback, useRef } from 'react';

const useDebouncePromise = (callback, delay = 500) => {
	const timerRef = useRef();

	const debouncedCallback = useCallback(
		(...args) => {
			return new Promise((resolve) => {
				if (timerRef.current) {
					clearTimeout(timerRef.current);
				}
				timerRef.current = setTimeout(() => {
					resolve(callback(...args));
				}, delay);
			});
		},
		[callback, delay],
	);

	return debouncedCallback;
};

export default useDebouncePromise;
