//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import AlertIcon from './сomponents/AlertIcon';

//-----style-----//
import './Alert.scss';

const Alert = (props) => {
	const { classes, iconALert, titleALert, textALert } = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' alert'}>
			<div className="alert__content">
				{iconALert && <AlertIcon iconALert={iconALert} />}
				{titleALert && <h4 className="alert__title">{titleALert}</h4>}
				{textALert && <p className="alert__text">{textALert}</p>}
			</div>
		</div>
	);
};

export default Alert;
