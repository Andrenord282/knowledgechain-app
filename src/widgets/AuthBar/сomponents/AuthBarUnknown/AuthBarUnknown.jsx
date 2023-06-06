//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----controllers-----//
import { useAuthController } from '../../controllers';

//-----сomponents-----//
import Button from 'сomponents/Button';

//-----style-----//
import './AuthBarUnknown.scss';

const AuthBarUnknown = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const authController = useAuthController();

	const hanlderOpenAuthModal = () => {
		authController.openAuthModal();
	};

	return (
		<>
			<div className={inheritClasses + ' auth-bar-unknown'}>
				<Button classes="auth-bar-unknown__btn" handleClick={hanlderOpenAuthModal}>
					<span className="btn-text">Войти</span>
				</Button>
			</div>
		</>
	);
};

export default AuthBarUnknown;
