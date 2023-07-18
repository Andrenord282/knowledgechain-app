const useFocusComponent = (ref) => {
    const onFocus = () => {
        ref.current.focus();
        console.log(ref.current)
    };

    return {
        onFocus,
    };
};

export { useFocusComponent };
