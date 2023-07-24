//-----modules-----//
import classNames from "classnames";

//-----components-----//
import AlertIcon from './components/AlertIcon';

//-----style-----//
import './Alert.scss';

const Alert = (props) => {
    const { classes, iconALert, titleALert, textALert } = props;

    return (
        <div className={classNames(classes, 'alert')}>
            <div className="alert__content">
                {iconALert && <AlertIcon iconALert={iconALert} />}
                {titleALert && <h4 className="alert__title">{titleALert}</h4>}
                {textALert && <p className="alert__text">{textALert}</p>}
            </div>
        </div>
    );
};

export default Alert;
