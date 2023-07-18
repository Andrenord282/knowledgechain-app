import { useEffect, useRef } from 'react';

const useEventOutside = (ref, callback, eventName = 'click') => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const handleEventOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callbackRef.current(e);
            }
        };

        document.addEventListener(eventName, handleEventOutside);

        return () => {
            document.removeEventListener(eventName, handleEventOutside);
        };
    }, [ref, eventName]);
};

export default useEventOutside;
