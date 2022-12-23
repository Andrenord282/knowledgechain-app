import useInputChange from 'hooks/useInputChange';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { toggleVisible, toggleLock, setType } from 'Redux/slices/modalSlice';
import { toggleLoadedUser } from 'Redux/slices/userSlice';

import authService from 'services/authService';
import registration from 'Firebase-services/auth/registration';

import Alert from 'сomponents/Alert/Alert';
import Button from 'сomponents/Button/Button';
import { ReactComponent as IconClose } from 'assets/img/svg/icon-close.svg';
import InputBar from 'сomponents/Input/Input';

import 'reusableStyles/FormAuth.scss';

const SignUp = () => {
	const dispatch = useDispatch();
	const email = useInputChange('');
	const login = useInputChange('');
	const password = useInputChange('');
	const [statusReq, setStatusReq] = useState(null);
	const [alertMessage, setAlertMessage] = useState(null);

	const handlerRegistation = async () => {
		const status = await authService.registration({
			email: email.value,
			userName: login.value,
			password: password.value,
		});

		console.log(status);
		// dispatch(toggleLock());
		// setStatusReq('loading');
		// setAlertMessage({ title: 'Регистрация...' });

		// const statusRegistration = await registration({
		// 	email: email.value,
		// 	login: login.value,
		// 	password: password.value,
		// });

		// if (statusRegistration.status) {
		// 	setStatusReq('success');
		// 	setAlertMessage({ title: 'Вы зарегистрировались' });
		// 	setTimeout(() => {
		// 		// dispatch(toggleLock());
		// 		dispatch(toggleVisible());
		// 		dispatch(toggleLoadedUser());
		// 		setStatusReq(null);
		// 	}, 700);
		// } else if (!statusRegistration.status) {
		// 	setStatusReq('error');
		// 	setAlertMessage({ title: 'Ошибка регистрации' });
		// 	setTimeout(() => {
		// 		// dispatch(toggleLock());
		// 		setStatusReq(null);
		// 	}, 700);
		// }
	};

	const handlerToggleModal = (e) => {
		const self = e.target;
		if (self.closest('.btn_close-auth')) {
			dispatch(setType(null));
			dispatch(toggleVisible());
		}
	};

	const handlerSignSetType = () => {
		dispatch(setType('SignIn'));
	};

	return (
		<>
			{statusReq === null && (
				<form className="form-auth">
					<Button
						inheritClasses="form-auth__btn-close btn_close-auth"
						handleClick={handlerToggleModal}>
						<IconClose className="btn__icon" />
					</Button>
					<h4 className="form-auth__title">Регистраиця</h4>
					<div className="form-auth__inputs">
						<InputBar
							inheritClasses="form-auth__input-bar"
							name="email"
							label="Ваша почта"
							type="email"
							value={email.value}
							placeholder="Введите почту"
							handlerChange={email.onChenge}
						/>
						<InputBar
							inheritClasses="form-auth__input-bar"
							name="login"
							label="Ваш логин"
							type="text"
							value={login.value}
							placeholder="Введите логин"
							handlerChange={login.onChenge}
						/>
						<InputBar
							inheritClasses="form-auth__input-bar"
							name="password"
							label="Ваш пароль"
							type="text"
							value={password.value}
							placeholder="Введите пароль"
							handlerChange={password.onChenge}
						/>
					</div>
					<div className="form-auth__list-btn">
						<Button
							inheritClasses="form-auth__btn-auth btn_default"
							handleClick={handlerRegistation}>
							<span className="btn__text">Регистрация</span>
						</Button>
						<Button
							inheritClasses="form-auth__btn-auth btn_default"
							handleClick={handlerSignSetType}>
							<span className="btn__text">Назад</span>
						</Button>
					</div>
				</form>
			)}
			{statusReq && <Alert status={statusReq} alertMessage={alertMessage} />}
		</>
	);
};

export default SignUp;
