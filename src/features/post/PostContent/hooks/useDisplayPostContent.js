import { useState, useEffect, useRef } from 'react';
import useSetAnimatePostContent from './useSetAnimatePostContent';
import useRequestAnimationFrame from 'hooks/useRequestAnimationFrame';

const useDisplayPostContent = () => {
	const containerRef = useRef(null);
	const bodyRef = useRef(null);
	const [isTrimContainer, setIsTrimContainer] = useState(false);
	const setAnimatePostContent = useSetAnimatePostContent(containerRef, bodyRef);
	const [startAnimatePostContent] = useRequestAnimationFrame(200, setAnimatePostContent);

	useEffect(() => {
		if (isTrimContainer) return;
		const containerHegth = containerRef.current.offsetHeight;
		const bodyHegth = bodyRef.current.scrollHeight;
		if (containerHegth < bodyHegth) {
			setIsTrimContainer(true);
		}
	}, [containerRef, bodyRef]);

	const handlerAnimateContainer = () => {
		startAnimatePostContent();
		setIsTrimContainer(false);
	};

	return {
		containerRef,
		bodyRef,
		isTrimContainer,
		deployContainer: setIsTrimContainer,
		handlerAnimateContainer,
	};
};

export default useDisplayPostContent;
