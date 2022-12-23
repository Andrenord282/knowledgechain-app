import { useState } from 'react';

const useFormAlert = (initState, initText, initImg) => {
	const [stateForm, setStateFormAlert] = useState(initState);
	const [alertText, setАlertText] = useState(initText);
	const [alertImg, setАlertImg] = useState(initImg);

	const setState = (state) => {
		setStateFormAlert(state);
	};

	const setText = (text) => {
		setАlertText(text);
	};

	const setImg = (img) => {
		setАlertImg(img);
	};

	return {
		stateForm,
		alertText,
		alertImg,
		setState,
		setText,
		setImg,
	};
};

export default useFormAlert;
