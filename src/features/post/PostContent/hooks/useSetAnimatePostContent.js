const useSetAnimatePostContent = (containerRef, bodyRef) => {
	if (containerRef.current === null && bodyRef.current === null) return;

	const containerHegth = containerRef.current.offsetHeight;
	const bodyHegth = bodyRef.current.scrollHeight;
	return (progress) => {
		const currentMaxHeight = Math.ceil(progress * (bodyHegth - containerHegth));
		containerRef.current.style.maxHeight = `${containerHegth + currentMaxHeight}px`;
	};
};
export default useSetAnimatePostContent;
