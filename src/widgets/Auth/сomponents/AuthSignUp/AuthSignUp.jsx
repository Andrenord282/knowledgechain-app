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
import './AuthSignUp.scss';

const AuthSignUp = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const lockAuthModal = useSelector(selectLockAuthModal);
	const alert = useAlertState();
	const authController = useAuthController();
	const {
		register,
		handleSubmit,
		watch,
		setError,
		formState: { errors, isValid },
	} = useForm({ mode: 'onChange' });

	const handlerCloseAuthModal = () => {
		authController.closeAuthModal(lockAuthModal);
	};

	const handlerSetAuthFormType = () => {
		authController.setAuthFormType('signIn');
	};

	const handlerSignUp = async (data) => {
		const response = await authController.signUp(alert, data);
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

	const handlerFormSignUp = handleSubmit(handlerSignUp);

	return (
		<>
			{!alert.toggleAlert && (
				<form
					className={inheritClasses + ' auth-sign-up'}
					onSubmit={handlerFormSignUp}
					onClick={(e) => {
						e.stopPropagation();
					}}>
					<Button classes="auth-sign-up__btn-close" handleClick={handlerCloseAuthModal}>
						<Icon.СrossClose className="btn-icon" />
					</Button>
					<h4 className="auth-sign-up__title">Регистрация</h4>
					<div className="auth-sign-up__body">
						<div className="auth-sign-up__input-content">
							<label htmlFor="email" className="auth-sign-up__label">
								Напишите Вашу почту
							</label>
							<input
								id="email"
								name="email"
								type="text"
								placeholder="Введите почту"
								className={errors.email ? 'auth-sign-up__input error' : 'auth-sign-up__input'}
								{...register('email', {
									required: 'Обязательное поле',
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: 'Не действительная почта',
									},
								})}
							/>
							{errors.email && <span className="auth-sign-up__input-alert">{errors.email.message}</span>}
						</div>
						<div className="auth-sign-up__input-content">
							<label htmlFor="userName" className="auth-sign-up__label">
								Напишите Ваш Логин
							</label>
							<input
								id="userName"
								name="userName"
								type="text"
								placeholder="Введите логин"
								className={errors.userName ? 'auth-sign-up__input error' : 'auth-sign-up__input'}
								{...register('userName', {
									required: 'Обязательное поле',
									pattern: {
										value: /^[a-zA-Z0-9]+$/,
										message: 'Используйте символы: A-Z, a-z, 0-9 ',
									},
									minLength: {
										value: 3,
										message: 'Логин должен быть не менее 3 символов',
									},
								})}
							/>
							{errors.userName && (
								<span className="auth-sign-up__input-alert">{errors.userName.message}</span>
							)}
						</div>
						<div className="auth-sign-up__input-content">
							<label htmlFor="password" className="auth-sign-up__label">
								Напишите Ваш пароль
							</label>
							<input
								id="password"
								type="password"
								placeholder="Введите пароль"
								className={errors.password ? 'auth-sign-up__input error' : 'auth-sign-up__input'}
								{...register('password', {
									required: 'Обязательное поле',
									validate: {
										minLength: (value) =>
											value.length >= 6 || 'Пароль должен быть не менее 6 символов',
										latinOnly: (value) =>
											/^[A-Za-z0-9]+$/.test(value) || 'Используйте символы: A-Z, a-z, 0-9 ',
									},
								})}
							/>
							{errors.password && (
								<span className="auth-sign-up__input-alert">{errors.password.message}</span>
							)}
						</div>
						<div className="auth-sign-up__input-content">
							<label htmlFor="confirmPassword" className="auth-sign-up__label">
								Повторите Ваш пароль
							</label>
							<input
								id="confirmPassword"
								type="password"
								placeholder="Повторите пароль"
								className={errors.confirmPassword ? 'auth-sign-up__input error' : 'auth-sign-up__input'}
								{...register('confirmPassword', {
									required: 'Обязательное поле',
									validate: {
										matchPassword: (value) => value === watch('password') || 'Пароли не совпадает',
									},
								})}
							/>
							{errors.confirmPassword && (
								<span className="auth-sign-up__input-alert">{errors.confirmPassword.message}</span>
							)}
						</div>
					</div>
					<button
						className={!isValid ? 'btn auth-sign-up__btn-auth inactive' : 'btn auth-sign-up__btn-auth'}
						type="submit">
						<span className="btn-text">Регистрация</span>
					</button>
					<Button classes="auth-sign-up__btn-auth" handleClick={handlerSetAuthFormType}>
						<span className="btn-text">Войти в учетную запись</span>
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

export default AuthSignUp;
