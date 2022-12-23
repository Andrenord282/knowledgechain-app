import { ReactComponent as IconSuccess } from 'assets/img/svg/icon-alert-success.svg';

const AlertSuccess = ({ title, text }) => {
	return (
		<div className="alert__success">
			<IconSuccess className="alert__icon" />
			<h4 className="alert__title">{title}</h4>
			<p className="alert__text">{text}</p>
		</div>
	);
};

export default AlertSuccess;
