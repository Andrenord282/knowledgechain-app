import useClasses from 'hooks/useClasses';

import Button from 'сomponents/Button';
import * as Icon from 'сomponents/_global/Icon';
import InputBar from 'сomponents/_global/Input/Input';
const SignInForm = (props) => {
	const {
		classes,
		email,
		password,
		onChengeEmail,
		onChengePassword,
		handlerSignUp,
		hanlderCloseAuth,
		handlerLogIn,
	} = props;
	const inheritClasses = useClasses(classes);
	return (
		<form
			className={inheritClasses + ' auth-form'}
			onClick={(e) => {
				e.stopPropagation();
			}}>
			<Button classes="btn_close-auth auth-form__btn-close" handleClick={hanlderCloseAuth}>
				<Icon.Close className="btn__icon" />
			</Button>
			<h4 className="auth-form__title">Авторизация</h4>
			<div className="auth-form__inputs">
				<InputBar
					classes="auth-form__input"
					name="email"
					label="Ваша почта"
					type="email"
					value={email}
					placeholder="Введите вашу почту"
					handlerChange={onChengeEmail}
				/>
				<InputBar
					classes="auth-form__input"
					name="password"
					label="Ваш пароль"
					type="text"
					value={password}
					placeholder="Введите ваш пароль"
					handlerChange={onChengePassword}
				/>
			</div>
			<div className="auth-form__btn-list">
				<Button classes="btn_default auth-form__btn-auth" handleClick={handlerLogIn}>
					<span className="btn__text">Войти</span>
				</Button>
				<Button classes="btn_default auth-form__btn-auth" handleClick={handlerSignUp}>
					<span className="btn__text">Новый пользователь</span>
				</Button>
			</div>
		</form>
	);
};

export default SignInForm;
