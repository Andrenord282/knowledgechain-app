import { useRef, useEffect } from 'react';

const useObserverScroll = (deps = [], callback) => {
	const observer = useRef(null);
	const observeRoot = useRef(null);
	const observeItem = useRef(null);

	useEffect(() => {
		if (observeItem.current == null) return;
		const options = {
			root: observeRoot.current,
			rootMargin: '0%',
			threshold: 0.5,
		};

		const handlerEntries = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					callback();
				}
			});
		};

		observer.current = new IntersectionObserver(handlerEntries, options);

		observer.current.observe(observeItem.current);

		return () => {
			observer.current.unobserve(observeItem.current);
		};
	}, [...deps, callback]);

	return { observeRoot, observeItem };
};

export default useObserverScroll;
