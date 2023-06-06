//-----hooks-----//
import { useState } from 'react';

const useAlertState = () => {
	const [toggleAlert, setToggleAlert] = useState(false);
	const [iconALert, setIconAlert] = useState(null);
	const [titleALert, setTitleAlert] = useState(null);
	const [textALert, setTextAlert] = useState(null);

	return {
		iconALert,
		titleALert,
		textALert,
		toggleAlert,
		setToggleAlert,
		setIconAlert,
		setTitleAlert,
		setTextAlert,
	};
};

export default useAlertState;
