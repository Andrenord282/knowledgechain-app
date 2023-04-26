const useFocusComponent = (ref) => {
	const onFocus = () => {
		ref.current.focus();
	};

	return {
		onFocus,
	};
};

export default useFocusComponent;
