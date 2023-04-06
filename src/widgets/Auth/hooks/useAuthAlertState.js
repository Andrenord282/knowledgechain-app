//-----hooks-----//
import { useState } from 'react';

const useAuthAlertState = () => {
	const [toggleAlert, setToggleAlert] = useState(false);
	const [iconALert, setIconAlert] = useState(null);
	const [titleALert, setTitleAlert] = useState(null);
	const [textALert, setTextAlert] = useState(null);

	return {
		toggleAlert,
		setToggleAlert,
		setFields: {
			iconAlert: setIconAlert,
			titleAlert: setTitleAlert,
			textAlert: setTextAlert,
		},
		alertFields: {
			iconALert,
			titleALert,
			textALert,
		},
	};
};

export default useAuthAlertState;
