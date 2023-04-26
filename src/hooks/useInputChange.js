import { useState } from 'react';

const useInputChange = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const [prevLength, setPrevLength] = useState('');

	const handleKeyDown = (e) => {
		setPrevLength(value.length);
	};

	const handleKeyUp = (e, callback, ...args) => {
		if (value.length < prevLength) {
			console.log(callback);
			callback(...args);
		}
	};

	const onChenge = (e) => {
		setValue(e.target.value);
	};

	const onReset = () => {
		setValue('');
	};

	return { value, onChenge, onReset, setValue, handleKeyDown, handleKeyUp };
};

export default useInputChange;
