import { ReactComponent as IconLoading } from 'assets/img/svg/icon-alert-loading.svg';

const AlertLoading = ({ title, text }) => {
	return (
		<div className="alert">
			<div className="alert__content">
				<div className="alert__loading">
					<IconLoading className="alert__icon" />
					<h4 className="alert__title">{title}</h4>
					<p className="alert__text">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default AlertLoading;

