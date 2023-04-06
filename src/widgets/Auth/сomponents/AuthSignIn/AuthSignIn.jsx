//-----modules-----//

//-----react-----//

//-----hooks-----//
import { useForm } from 'react-hook-form';
import useClasses from 'hooks/useClasses';
import useAuthSignIn from 'widgets/Auth/hooks/useAuthSignIn';

//-----redux-----//

//-----widgets-----//

//-----сomponents-----//
import Button from 'сomponents/Button';
import * as Icon from 'сomponents/Icon';

//-----style-----//
import './AuthSignIn.scss';

const AuthSignIn = (props) => {
	const { classes, authState, setAuthAlert } = props;
	const inheritClasses = useClasses(classes);

	const {
		register,
		handleSubmit,
		setError,
		formState: { isValid },
	} = useForm();

	const signIn = useAuthSignIn();

	const onSubmit = async (data) => {
		const response = await signIn(data, { authState, setAuthAlert });

		if (response?.errorName) {
			response.arrErrors.map((error) => {
				setError(error.field, {
					message: error.message,
				});
			});
		}
	};

	return (
		<form
			className={inheritClasses + ' auth-sign-in ' + authState.toggleVisibleAuthForm}
			onSubmit={handleSubmit(onSubmit)}
			onClick={(e) => {
				e.stopPropagation();
			}}>
			<Button classes="auth-sign-in__btn-close" handleClick={authState.closeAuth}>
				<Icon.СrossClose className="auth-sign-in__btn-icon" />
			</Button>
			<h4 className="auth-sign-in__title">Авторизация</h4>
			<div className="auth-sign-in__body">
				<div className="auth-sign-in__input-content">
					<label htmlFor="email" className="auth-sign-in__label">
						Введите Ваш логин
					</label>
					<input
						id="login"
						name="login"
						type="text"
						placeholder="Введите логин"
						className="auth-sign-in__input"
						{...register('login', {
							required: true,
						})}
					/>
				</div>
				<div className="auth-sign-in__input-content">
					<label htmlFor="password" className="auth-sign-in__label">
						Введите Ваш пароль
					</label>
					<input
						id="password"
						type="password"
						placeholder="Введите пароль"
						className="auth-sign-in__input"
						{...register('password', {
							required: true,
						})}
					/>
				</div>
			</div>
			<div className="auth-sign-in__nav-btns">
				<button
					className={!isValid ? 'btn auth-sign-up__btn-auth inactive' : 'btn auth-sign-up__btn-auth'}
					type="submit">
					<span className="auth-sign-in__btn-text">Войти</span>
				</button>
				<Button classes="auth-sign-in__btn-auth" handleClick={authState.setAuthFormState}>
					<span className="auth-sign-in__btn-text">Создать учетную запись</span>
				</Button>
			</div>
		</form>
	);
};

export default AuthSignIn;
