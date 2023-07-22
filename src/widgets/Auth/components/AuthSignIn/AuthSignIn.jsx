/* eslint-disable react-hooks/exhaustive-deps */
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
import * as Icon from 'components/Icon';
import Button from 'components/Button';
import Alert from 'components/Alert';

//-----style-----//
import './AuthSignIn.scss';

const AuthSignIn = (props) => {
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
        formState: { isValid },
    } = useForm();
    const inputUserName = watch('userName');
    const inputUserPassword = watch('userPassword');

    useEffect(() => {
        setFocus('userName');
    }, []);

    useFormErrorLoglist(inputUserName, 'userName', setErrorLogList);

    useFormErrorLoglist(inputUserPassword, 'userPassword', setErrorLogList);

    const handleCloseAuthModal = () => {
        authController.closeAuthModal(lockAuthModal);
    };

    const handleSetAuthType = () => {
        authController.setAuthFormType('signUp');
    };

    const handleSignIn = async (data) => {
        await authController.signIn(alert, data, setErrorLogList, requestAuth);
    };

    const handleFormSignIn = handleSubmit(handleSignIn);
    return (
        <div className={classNames(classes, 'auth-sign-in')}>
            {!alert.toggleAlert && (
                <form
                    className="auth-sign-in__form"
                    onSubmit={handleFormSignIn}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}>
                    <Button classes="auth-sign-in__close-btn" handleClick={handleCloseAuthModal}>
                        <Icon.СrossClose className="btn-icon" />
                    </Button>
                    <h4 className="auth-sign-in__title">Авторизация</h4>
                    <div className="auth-sign-in__body">
                        <div className="auth-sign-in__input-body">
                            <label htmlFor="email" className="auth-sign-in__label">
                                Введите Ваш логин
                            </label>
                            <input
                                id="userName"
                                name="userName"
                                type="text"
                                placeholder="Введите логин"
                                className={
                                    errorLogList?.userNameNotFound || errorLogList?.userNameNotMatch
                                        ? 'auth-sign-in__input error'
                                        : 'auth-sign-in__input'
                                }
                                {...register('userName', {
                                    required: true,
                                })}
                            />
                            {errorLogList?.userNameNotFound && (
                                <span className="auth-sign-in__input-alert">
                                    {errorLogList.userNameNotFound.message}
                                </span>
                            )}
                            {errorLogList?.userNameNotMatch && (
                                <span className="auth-sign-in__input-alert">
                                    {errorLogList?.userNameNotMatch.message}
                                </span>
                            )}
                        </div>
                        <div className="auth-sign-in__input-body">
                            <label htmlFor="password" className="auth-sign-in__label">
                                Введите Ваш пароль
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Введите пароль"
                                className={
                                    errorLogList?.userPasswordNotMatch
                                        ? 'auth-sign-in__input error'
                                        : 'auth-sign-in__input'
                                }
                                {...register('userPassword', {
                                    required: true,
                                })}
                            />
                            {errorLogList?.userPasswordNotMatch && (
                                <span className="auth-sign-in__input-alert">
                                    {errorLogList?.userPasswordNotMatch.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <button
                        className={!isValid ? 'btn auth-sign-in__auth-btn inactive' : 'btn auth-sign-in__auth-btn'}
                        type="submit">
                        <span className="btn-text">Войти</span>
                    </button>
                    <Button classes="auth-sign-in__auth-btn" handleClick={handleSetAuthType}>
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
        </div>
    );
};

export default AuthSignIn;
