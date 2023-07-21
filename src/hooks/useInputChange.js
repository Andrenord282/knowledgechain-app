import { useState } from 'react';

const useInputChange = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChenge = (e) => {
        setValue(e.target.value);
    };

    const onReset = () => {
        setValue('');
    };

    return {
        value,
        onChenge,
        onReset,
        setValue,
    };
};

export { useInputChange };
