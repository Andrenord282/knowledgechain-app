import { useEffect, useRef } from 'react';

const useTabNavigateElementList = (
    delegateElementRef,
    handleActivate = null,
    handleDeactivate = null,
) => {
    const handleActivateRef = useRef(handleActivate);
    const handleDeactivateRef = useRef(handleDeactivate);

    useEffect(() => {
        handleActivateRef.current = handleActivate;
        handleDeactivateRef.current = handleDeactivate;
    }, [handleActivate, handleDeactivate]);

    useEffect(() => {
        const delegateElement = delegateElementRef.current;

        const handleFocusinElement = (e) => {
            switch (true) {
                case delegateElement && delegateElement.contains(e.target):
                    if (handleActivateRef.current) {
                        handleActivateRef.current(e);
                    }
                    break;

                case delegateElement && !delegateElement.contains(e.target):
                    if (handleDeactivateRef.current) {
                        handleDeactivateRef.current(e);
                    }
                    break;

                default:
                    break;
            }
        };

        document.addEventListener('focusin', handleFocusinElement);

        return () => {
            document.removeEventListener('focusin', handleFocusinElement);
        };
    }, [delegateElementRef]);
};

export { useTabNavigateElementList };
