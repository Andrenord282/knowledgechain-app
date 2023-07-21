const useFocusComponent = (elementRef) => {
    const onFocus = () => {
        elementRef.current.focus();
    };

    return {
        onFocus,
    };
};

export { useFocusComponent };
