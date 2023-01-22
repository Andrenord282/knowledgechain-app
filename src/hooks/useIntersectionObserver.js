import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (setOptions) => {
	const [isDisplay, setIsDisplay] = useState(false);
	const [node, setNode] = useState(null);
	const observer = useRef(null);
	const options = {
		root: null,
		rootMargin: '0px',
		threchold: 1,
		...setOptions,
	};
	const callbaclObserver = (entries, observer) => {
		const [entry] = entries;
		if (entry.isIntersecting) {
			setIsDisplay(true);
			observer.unobserve(entry.target);
		}
	};

	useEffect(() => {
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver(callbaclObserver, options);

		const { current: currentObserver } = observer;

		if (node) currentObserver.observe(node);
		return () => {
			currentObserver.disconnect();
		};
	}, [node, options]);

	return [setNode, isDisplay];
};

export default useIntersectionObserver;
