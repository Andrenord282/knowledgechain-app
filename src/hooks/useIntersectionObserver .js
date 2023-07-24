import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (
    options = {
        rootMargin: '0px',
        threshold: 1,
    },
) => {
    const [inView, setInView] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        if (!elementRef.current) {
            return;
        }

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(elementRef.current);

        return () => {
            observer.disconnect();
        };
    }, [elementRef, options]);

    return [elementRef, inView, setInView];
};

export { useIntersectionObserver };
