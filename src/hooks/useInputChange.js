import { useState } from 'react';

const useInputChange = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const onChenge = (e) => {
		setValue(e.target.value);
	};

	return { value, onChenge, setValue };
};

export default useInputChange;
