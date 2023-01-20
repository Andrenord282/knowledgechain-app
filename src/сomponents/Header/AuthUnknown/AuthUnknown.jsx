import useClasses from 'hooks/useClasses';
import useToggle from 'hooks/useToggle';
import Auth from 'widgets/auth';
import Button from 'сomponents/Button';
import './AuthUnknown.scss';

const AuthUnknown = ({ classes }) => {
	const inheritClasses = useClasses(classes);
	const [toggleAuth, setToggleAuth] = useToggle();
	return (
		<>
			<div className={inheritClasses + ' auth-bar auth-bar_unknown'}>
				<Button classes="auth-bar_unknown__btn btn_default" handleClick={setToggleAuth}>
					<span className="auth-bar_unknown__btn-text btn__text">Войти</span>
				</Button>
			</div>
			<Auth toggleAuth={toggleAuth} setToggleAuth={setToggleAuth}/>
		</>
	);
};

export default AuthUnknown;
