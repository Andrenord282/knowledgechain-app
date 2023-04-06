//-----hooks-----//
import useClasses from 'hooks/useClasses';
import useToggle from 'hooks/useToggle';

//-----widgets-----//
import Auth from 'widgets/Auth';

//-----сomponents-----//
import Button from 'сomponents/Button';

//-----style-----//
import './AuthBarUnknown.scss';

const AuthBarUnknown = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const [toggleAuth, setToggleAuth] = useToggle();

	return (
		<>
			<div className={inheritClasses + ' auth-bar-unknown'}>
				<Button classes="auth-bar-unknown__btn" handleClick={setToggleAuth}>
					<span className="auth-bar-unknown__btn-text">Войти</span>
				</Button>
			</div>
			<Auth toggleAuth={toggleAuth} setToggleAuth={setToggleAuth} />
		</>
	);
};

export default AuthBarUnknown;
