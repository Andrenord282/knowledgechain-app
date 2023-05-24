//-----modules-----//
import classNames from 'classnames';

//-----hooks-----//
import { useForm } from 'react-hook-form';
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import Button from 'сomponents/Button';
import * as Icon from 'сomponents/Icon';

//-----style-----//
import './AuthSignIn.scss';

const AuthSignIn = (props) => {
	const { classes, authSlice } = props;
	const inheritClasses = useClasses(classes);

	const {
		register,
		handleSubmit,
		setError,
		formState: { isValid, errors },
	} = useForm();

	const handlerOnSubmit = async (data) => {
		const response = await authSlice.hanlderAuthSignIn(data);
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

	const classVisibleAuthForm = classNames({
		visible: authSlice.visibleAuthForm,
		'': !authSlice.visibleAuthForm,
	});

	return (
		<form
			className={inheritClasses + ' auth-sign-in ' + classVisibleAuthForm}
			onSubmit={handleSubmit(handlerOnSubmit)}
			onClick={(e) => {
				e.stopPropagation();
			}}>
			<Button
				classes="auth-sign-in__btn-close"
				handleClick={() => {
					authSlice.handlerCloseAuthModal();
				}}>
				<Icon.СrossClose className="auth-sign-in__btn-icon" />
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
					{errors.userName && <span className="auth-sign-in__input-alert">{errors.userName.message}</span>}
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
					{errors.password && <span className="auth-sign-in__input-alert">{errors.password.message}</span>}
				</div>
			</div>
			<div className="auth-sign-in__nav-btns">
				<button
					className={!isValid ? 'btn auth-sign-up__btn-auth inactive' : 'btn auth-sign-up__btn-auth'}
					type="submit">
					<span className="auth-sign-in__btn-text">Войти</span>
				</button>
				<Button
					classes="auth-sign-in__btn-auth"
					handleClick={() => {
						authSlice.handlerAuthFormState();
					}}>
					<span className="auth-sign-in__btn-text">Создать учетную запись</span>
				</Button>
			</div>
		</form>
	);
};

export default AuthSignIn;
