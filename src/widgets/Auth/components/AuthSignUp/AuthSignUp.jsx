//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAlertState } from 'hooks/useAlertState';
import { useFormErrorLoglist } from "../../hooks/useErrorLostList";

//-----controllers-----//
import { useAuthController } from 'controllers';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectRequestAuth, selectLockAuthModal } from 'store/authSlice';

//-----components-----//
import Button from 'components/Button';
import * as Icon from 'components/Icon';
import Alert from 'components/Alert';

//-----style-----//
import './AuthSignUp.scss';

const AuthSignUp = (props) => {
    const { classes } = props;
    const requestAuth = useSelector(selectRequestAuth);
    const lockAuthModal = useSelector(selectLockAuthModal);
    const [errorLogList, setErrorLogList] = useState({});
    const alert = useAlertState();
    const authController = useAuthController();
    const {
        register,
        handleSubmit,
        watch,
        setFocus,
        formState: { errors, isValid },
    } = useForm({ mode: 'onChange' });

    const inputUserEmail = watch('userEmail');
    const inputUserName = watch('userName');

    useEffect(() => {
        setFocus('userEmail');
    }, []);


    useFormErrorLoglist(inputUserEmail, 'userEmail', setErrorLogList);

    useFormErrorLoglist(inputUserName, 'userName', setErrorLogList);

    const handleCloseAuthModal = () => {
        authController.closeAuthModal(lockAuthModal);
    };

    const handleSetAuthType = () => {
        authController.setAuthFormType('signIn');
    };
    const handleSignUp = async (data) => {
        await authController.signUp(alert, data, setErrorLogList, requestAuth);
    };

    const handleFormSignUp = handleSubmit(handleSignUp);

    return (
        <div className={classNames(classes, 'auth-sign-up')}>
            {!alert.toggleAlert && (
                <form
                    className="auth-sign-up__form"
                    onSubmit={handleFormSignUp}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}>
                    <Button classes="auth-sign-up__close-btn" handleClick={handleCloseAuthModal}>
                        <Icon.СrossClose className="btn-icon" />
                    </Button>
                    <h4 className="auth-sign-up__title">Регистрация</h4>
                    <div className="auth-sign-up__body">
                        <div className="auth-sign-up__input-body">
                            <label htmlFor="email" className="auth-sign-up__label">
                                Напишите Вашу почту
                            </label>
                            <input
                                id="userEmail"
                                name="userEmail"
                                type="text"
                                placeholder="Введите почту"
                                className={
                                    errors.userEmail || errorLogList?.userEmailExists
                                        ? 'auth-sign-up__input error'
                                        : 'auth-sign-up__input'
                                }
                                {...register('userEmail', {
                                    required: 'Обязательное поле',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Не действительная почта',
                                    },
                                })}
                            />
                            {errors.userEmail && (
                                <span className="auth-sign-up__input-alert">{errors.userEmail.message}</span>
                            )}
                            {errorLogList?.userEmailExists && (
                                <span className="auth-sign-up__input-alert">
                                    {errorLogList?.userEmailExists.message}
                                </span>
                            )}
                        </div>
                        <div className="auth-sign-up__input-body">
                            <label htmlFor="userName" className="auth-sign-up__label">
                                Напишите Ваш Логин
                            </label>
                            <input
                                id="userName"
                                name="userName"
                                type="text"
                                placeholder="Введите логин"
                                className={
                                    errors.userName || errorLogList?.userNameExists
                                        ? 'auth-sign-up__input error'
                                        : 'auth-sign-up__input'
                                }
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
                            {errorLogList?.userNameExists && (
                                <span className="auth-sign-up__input-alert">
                                    {errorLogList?.userNameExists.message}
                                </span>
                            )}
                        </div>
                        <div className="auth-sign-up__input-body">
                            <label htmlFor="userPassword" className="auth-sign-up__label">
                                Напишите Ваш пароль
                            </label>
                            <input
                                id="userPassword"
                                type="password"
                                placeholder="Введите пароль"
                                className={errors.password ? 'auth-sign-up__input error' : 'auth-sign-up__input'}
                                {...register('userPassword', {
                                    required: 'Обязательное поле',
                                    validate: {
                                        minLength: (value) =>
                                            value.length >= 6 || 'Пароль должен быть не менее 6 символов',
                                        latinOnly: (value) =>
                                            /^[A-Za-z0-9]+$/.test(value) || 'Используйте символы: A-Z, a-z, 0-9 ',
                                    },
                                })}
                            />
                            {errors.userPassword && (
                                <span className="auth-sign-up__input-alert">{errors.userPassword.message}</span>
                            )}
                        </div>
                        <div className="auth-sign-up__input-body">
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
                                        matchPassword: (value) =>
                                            value === watch('userPassword') || 'Пароли не совпадает',
                                    },
                                })}
                            />
                            {errors.confirmPassword && (
                                <span className="auth-sign-up__input-alert">{errors.confirmPassword.message}</span>
                            )}
                        </div>
                    </div>
                    <button
                        className={!isValid ? 'btn auth-sign-up__auth-btn inactive' : 'btn auth-sign-up__auth-btn'}
                        type="submit">
                        <span className="btn-text">Регистрация</span>
                    </button>
                    <Button classes="auth-sign-up__auth-btn" handleClick={handleSetAuthType}>
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
        </div>
    );
};

export default AuthSignUp;
