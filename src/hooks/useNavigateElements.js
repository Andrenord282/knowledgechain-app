import { useEffect, useRef } from 'react';

const useNavigateElements = (ref, callback, eventName = 'focus') => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const navigateElement = ref.current;
        
        const handleNavigateElements = (e) => {
            if (navigateElement) {
                callbackRef.current(e);
            }
        };

        navigateElement.addEventListener(eventName, handleNavigateElements);

        return () => {
            navigateElement.removeEventListener(eventName, handleNavigateElements);
        };
    }, [ref, eventName]);
};

export default useNavigateElements;
