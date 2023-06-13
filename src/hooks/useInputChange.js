import { useState } from 'react';

const useInputChange = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const [prevValueLength, setPrevValueLength] = useState('');

	// const handleKeyDown = (e) => {
	// 	setPrevValueLength(e.target.value.length);
	// };

	// const handleKeyUp = (e, callback, ...args) => {
	// 	if (e.target.value.length !== prevValueLength || e.target.value.length === 0) {
	// 		callback(...args);
	// 	}
	// };

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
		// handleKeyDown,
		//  handleKeyUp
	};
};

export default useInputChange;
