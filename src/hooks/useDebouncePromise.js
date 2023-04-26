import { useCallback, useRef } from 'react';

const useDebouncePromise = (callback, delay = 500) => {
	const timer = useRef();

	const debouncedCallback = useCallback(
		(...args) => {
			return new Promise((resolve) => {
				if (timer.current) {
					clearTimeout(timer.current);
				}
				timer.current = setTimeout(() => {
					resolve(callback(...args));
				}, delay);
			});
		},
		[callback, delay],
	);

	return debouncedCallback;
};

export default useDebouncePromise;
