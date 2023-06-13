//-----сomponents-----//
import * as Icon from 'сomponents/Icon';

const AlertModalIcon = (props) => {
	const { iconALert } = props;

	switch (true) {
		case iconALert === 'loading':
			return (
				<div className="alert__icon">
					<Icon.AlertLoading />
				</div>
			);

		case iconALert === 'success':
			return (
				<div className="alert__icon">
					<Icon.AlertSuccess />
				</div>
			);
		case iconALert === 'error':
			return (
				<div className="alert__icon">
					<Icon.AlertError />
				</div>
			);
		default:
			break;
	}
};

export default AlertModalIcon;
