//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----controllers-----//
import { useAuthController } from '../../controllers';

//-----сomponents-----//
import LinkCustom from 'сomponents/LinkCustom/LinkCustom';
import Button from 'сomponents/Button';

//-----style-----//
import './AuthBarKnownList.scss';

const AuthBarKnownList = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const authController = useAuthController();

	return (
		<div className={inheritClasses + ' auth-bar-known-list active'}>
			<LinkCustom classes="auth-bar-known-list__btn" link={'/profile'}>
				<span className="btn-text">Профиль</span>
			</LinkCustom>
			<Button classes="auth-bar-known-list__btn" handleClick={authController.signOut}>
				<span className="btn-text">Выйти</span>
			</Button>
		</div>
	);
};

export default AuthBarKnownList;
