import { useEffect, useRef } from 'react';

const useEventOutside = (elementRef, handleActivate, eventName = 'click') => {
    const handleActivateRef = useRef(handleActivate);

    useEffect(() => {
        handleActivateRef.current = handleActivate;
    }, [handleActivate]);

    useEffect(() => {
        const handleClickInside = (e) => {
            if (elementRef.current && !elementRef.current.contains(e.target)) {
                handleActivateRef.current();
            }
        };

        document.addEventListener(eventName, handleClickInside);

        return () => {
            document.removeEventListener(eventName, handleClickInside);
        };
    }, [elementRef, eventName]);
};

export { useEventOutside };
