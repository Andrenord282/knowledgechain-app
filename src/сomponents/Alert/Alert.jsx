//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import AlertIcon from './сomponents/AlertIcon';

//-----style-----//
import './Alert.scss';

const Alert = (props) => {
	const { classes, alertFields } = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' alert'}>
			<div className="alert__content">
				<AlertIcon iconALert={alertFields?.iconALert} />
				{alertFields?.titleALert && <h4 className="alert__title">{alertFields.titleALert}</h4>}
				{alertFields?.textALert && <p className="alert__text">{alertFields.textALert}</p>}
			</div>
		</div>
	);
};

export default Alert;
