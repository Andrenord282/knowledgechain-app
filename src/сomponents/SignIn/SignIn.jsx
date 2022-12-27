import useInputChange from 'hooks/useInputChange';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { toggleVisible, toggleLock, setType } from 'Redux/slices/modalSlice';
import { toggleAuthUser, setUser } from 'Redux/slices/userSlice';

import authService from 'services/authService';

import Alert from 'сomponents/Alert/Alert';
import Button from 'сomponents/Button/Button';
import { ReactComponent as IconClose } from 'assets/img/svg/icon-close.svg';
import InputBar from 'сomponents/Input/Input';

import 'reusableStyles/FormAuth.scss';

const SignIn = () => {
	const dispatch = useDispatch();
	const email = useInputChange('');
	const password = useInputChange('');
	const [statusReq, setStatusReq] = useState(null);
	const [alertMessage, setAlertMessage] = useState(null);

	const handlerLogIn = async () => {
		dispatch(toggleLock());
		setStatusReq('loading');
		setAlertMessage({ title: 'Авторизация...' });

		const response = await authService.logIn({
			email: email.value,
			password: password.value,
		});
		if (response.status === 200) {
			setStatusReq('success');
			setAlertMessage({ title: 'Вы авторизованный пользователь' });
			setTimeout(() => {
				dispatch(toggleLock());
				dispatch(toggleVisible());
				dispatch(toggleAuthUser());
				dispatch(setUser(response.data));
				setStatusReq(null);
			}, 700);
		} else if (response.status !== 200) {
			setStatusReq('error');
			setAlertMessage({ title: response.data.message });
			setTimeout(() => {
				dispatch(toggleLock());
				setStatusReq(null);
			}, 1000);
		}
	};

	const handlerToggleModal = (e) => {
		const self = e.target;
		if (self.closest('.btn_close-auth')) {
			dispatch(setType(null));
			dispatch(toggleVisible());
		}
	};

	const handlerSignSetType = () => {
		dispatch(setType('SignUp'));
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
					<h4 className="form-auth__title">Авторизация</h4>
					<div className="form-auth__inputs">
						<InputBar
							inheritClasses="form-auth__input-bar"
							name="email"
							label="Ваша почта"
							type="email"
							value={email.value}
							placeholder="Введите вашу почту"
							handlerChange={email.onChenge}
						/>
						<InputBar
							inheritClasses="form-auth__input-bar"
							name="password"
							label="Ваш пароль"
							type="text"
							value={password.value}
							placeholder="Введите ваш пароль"
							handlerChange={password.onChenge}
						/>
					</div>
					<div className="form-auth__list-btn">
						<Button
							inheritClasses="form-auth__btn-auth btn_default"
							handleClick={handlerLogIn}>
							<span className="btn__text">Войти</span>
						</Button>
						<Button
							inheritClasses="form-auth__btn-auth btn_default"
							handleClick={handlerSignSetType}>
							<span className="btn__text">Новый пользователь</span>
						</Button>
					</div>
				</form>
			)}
			{statusReq && <Alert status={statusReq} alertMessage={alertMessage} />}
		</>
	);
};

export default SignIn;
