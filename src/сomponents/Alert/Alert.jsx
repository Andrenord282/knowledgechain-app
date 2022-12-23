import AlertLoading from 'сomponents/AlertLoading/AlertLoading';
import AlertSuccess from 'сomponents/AlertSuccess/AlertSuccess';
import AlertError from 'сomponents/AlertError/AlertError';

import 'сomponents/Alert/Alert.scss';

const Alert = ({ status, alertMessage }) => {
	return (
		<>
			{status !== null && (
				<div className="alert">
					<div className="alert__content">
						{status === 'loading' && <AlertLoading {...alertMessage} />}
						{status === 'success' && <AlertSuccess {...alertMessage} />}
						{status === 'error' && <AlertError {...alertMessage} />}
					</div>
				</div>
			)}
		</>
	);
};

export default Alert;
