import useClasses from 'hooks/useClasses';

import InputForm from 'сomponents/_global/Input/Input';
import Button from 'сomponents/_global/Button';
import * as Icon from 'сomponents/_global/Icon';

const SignUpForm = (props) => {
	const {
		classes,
		email,
		login,
		password,
		onChengeEmail,
		onChengelogin,
		onChengePassword,
		hanlderCloseAuth,
		handlerRegistation,
		handlerSignIn,
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
			<h4 className="auth-form__title">Регистраиця</h4>
			<div className="auth-form__inputs">
				<InputForm
					classes="auth-form__input"
					name="email"
					label="Ваша почта"
					type="email"
					value={email}
					placeholder="Введите почту"
					handlerChange={onChengeEmail}
				/>
				<InputForm
					classes="auth-form__input"
					name="login"
					label="Ваш логин"
					type="text"
					value={login}
					placeholder="Введите логин"
					handlerChange={onChengelogin}
				/>
				<InputForm
					classes="auth-form__input"
					name="password"
					label="Ваш пароль"
					type="text"
					value={password}
					placeholder="Введите пароль"
					handlerChange={onChengePassword}
				/>
			</div>
			<div className="auth-form__btn-list">
				<Button classes="btn_default auth-form__btn-auth" handleClick={handlerRegistation}>
					<span className="btn__text">Регистрация</span>
				</Button>
				<Button classes="btn_default auth-form__btn-auth" handleClick={handlerSignIn}>
					<span className="btn__text">Назад</span>
				</Button>
			</div>
		</form>
	);
};

export default SignUpForm;
