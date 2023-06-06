//-----hooks-----//
import { useForm } from 'react-hook-form';
import useClasses from 'hooks/useClasses';
import useAlertState from 'hooks/useAlertState';

//-----controllers-----//
import { useAuthController } from '../../controllers';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectLockAuthModal } from 'store/authSlice';

//-----сomponents-----//
import Button from 'сomponents/Button';
import * as Icon from 'сomponents/Icon';
import Alert from 'сomponents/Alert';

//-----style-----//
import './AuthSignIn.scss';

const AuthSignIn = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const lockAuthModal = useSelector(selectLockAuthModal);
	const alert = useAlertState();
	const authController = useAuthController();
	const {
		register,
		handleSubmit,
		setError,
		formState: { isValid, errors },
	} = useForm();

	const handlerCloseAuthModal = () => {
		authController.closeAuthModal(lockAuthModal);
	};

	const handlerSetAuthFormType = () => {
		authController.setAuthFormType('signUp');
	};

	const handlerSignIn = async (data) => {
		const response = await authController.signIn(alert, data);
		if (response?.errorName) {
			response.arrErrors.map((error) => {
				if (error.field) {
					setError(error.field, {
						message: error.message,
					});
				}
			});
			return;
		}
	};

	const handlerFormSignIn = handleSubmit(handlerSignIn);

	return (
		<>
			{!alert.toggleAlert && (
				<form
					className={inheritClasses + ' auth-sign-in'}
					onSubmit={handlerFormSignIn}
					onClick={(e) => {
						e.stopPropagation();
					}}>
					<Button classes="auth-sign-in__btn-close" handleClick={handlerCloseAuthModal}>
						<Icon.СrossClose className="btn-icon" />
					</Button>
					<h4 className="auth-sign-in__title">Авторизация</h4>
					<div className="auth-sign-in__body">
						<div className="auth-sign-in__input-content">
							<label htmlFor="email" className="auth-sign-in__label">
								Введите Ваш логин
							</label>
							<input
								id="userName"
								name="userName"
								type="text"
								placeholder="Введите логин"
								className={errors.userName ? 'auth-sign-in__input error' : 'auth-sign-in__input'}
								{...register('userName', {
									required: true,
								})}
							/>
							{errors.userName && (
								<span className="auth-sign-in__input-alert">{errors.userName.message}</span>
							)}
						</div>
						<div className="auth-sign-in__input-content">
							<label htmlFor="password" className="auth-sign-in__label">
								Введите Ваш пароль
							</label>
							<input
								id="password"
								type="password"
								placeholder="Введите пароль"
								className={errors.password ? 'auth-sign-in__input error' : 'auth-sign-in__input'}
								{...register('password', {
									required: true,
								})}
							/>
							{errors.password && (
								<span className="auth-sign-in__input-alert">{errors.password.message}</span>
							)}
						</div>
					</div>
					<button
						className={!isValid ? 'btn auth-sign-up__btn-auth inactive' : 'btn auth-sign-up__btn-auth'}
						type="submit">
						<span className="btn-text">Войти</span>
					</button>
					<Button classes="auth-sign-in__btn-auth" handleClick={handlerSetAuthFormType}>
						<span className="btn-text">Создать учетную запись</span>
					</Button>
				</form>
			)}
			{alert.toggleAlert && (
				<Alert
					classes="auth-sign-in__alert"
					iconALert={alert.iconALert}
					titleALert={alert.titleALert}
					textALert={alert.textALert}
				/>
			)}
		</>
	);
};

export default AuthSignIn;
