import { ReactComponent as IconError } from 'assets/img/svg/icon-alert-error.svg';

const AlertError = ({ title, text }) => {
	return (
		<div className="alert">
			<div className="alert__content">
				<div className="alert__error">
					<IconError className="alert__icon" />
					<h4 className="alert__title">{title}</h4>
					<p className="alert__text">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default AlertError;
