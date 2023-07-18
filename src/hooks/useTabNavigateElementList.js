import { useEffect, useRef } from 'react';

const useTabNavigateElementList = (delegateElementRef, handleActivate = null, handleDeactivate) => {
    const handleActivateRef = useRef(handleActivate);
    const handleDeactivateRef = useRef(handleDeactivate);

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
    }, [delegateElementRef, handleActivate, handleDeactivate]);
};

export default useTabNavigateElementList;
