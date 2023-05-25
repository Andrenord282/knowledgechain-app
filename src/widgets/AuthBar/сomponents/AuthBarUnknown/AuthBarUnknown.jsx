//-----hooks-----//
import useClasses from 'hooks/useClasses';
import useAuthSlice from 'hooks/slices/useAuthSlice';

//-----сomponents-----//
import Button from 'сomponents/Button';

//-----style-----//
import './AuthBarUnknown.scss';

const AuthBarUnknown = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const authSlice = useAuthSlice();

	return (
		<>
			<div className={inheritClasses + ' auth-bar-unknown'}>
				<Button
					classes="auth-bar-unknown__btn"
					handleClick={() => {
						authSlice.handlerSetToggleAuthModal(true);
					}}>
					<span className="auth-bar-unknown__btn-text">Войти</span>
				</Button>
			</div>
		</>
	);
};

export default AuthBarUnknown;
