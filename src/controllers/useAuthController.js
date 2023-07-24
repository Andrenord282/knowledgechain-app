//-----modules-----//
import { authService } from 'services/axios/api/authService';
import { ErrorService } from 'shared/errorService/errorService';

import { useNavigateLocation } from 'hooks/useNavigateLocation';

//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { userActions } from 'store/userSlice';
import { authActions } from 'store/authSlice';

const useAuthController = () => {
    const dispatch = useDispatch();
    const { setLocationPage } = useNavigateLocation();

    const openAuthModal = () => {
        dispatch(authActions.setTypeAuth({ typeAuth: 'signIn' }));
        dispatch(authActions.setToggleAuthModal({ toggle: true }));
    };

    const closeAuthModal = (lockAuthModal) => {
        if (!lockAuthModal) {
            dispatch(authActions.setToggleAuthModal({ toggle: false }));
            dispatch(authActions.setToggleRequestAuth({ toggle: false }));
        }
    };

    const setAuthFormType = (typeAuth) => {
        dispatch(authActions.setTypeAuth({ typeAuth }));
    };

    const setToggleRequestAuth = (toggle) => {
        dispatch(authActions.setToggleRequestAuth({ toggle }));
    };

    const signUp = async (alert, data, setErrorLogList, requestAuth = false) => {
        try {
            dispatch(authActions.setLockAuthModal({ lock: true }));
            alert.setToggleAlert(true);
            alert.setIconAlert('loading');
            alert.setTitleAlert('Регистрация...');

            const response = await authService.logUp(data);

            if (response.status === 200) {
                alert.setIconAlert('success');
                alert.setTitleAlert('Вы зарегистрировались');
                setTimeout(() => {
                    alert.setToggleAlert(false);
                    alert.setIconAlert(null);
                    alert.setTitleAlert(null);
                    dispatch(authActions.setLockAuthModal({ lock: false }));
                    dispatch(authActions.setAuthStatus({ status: 'identifiedUser' }));
                    dispatch(authActions.setToggleAuthModal({ toggle: false }));
                    if (requestAuth) {
                        dispatch(authActions.setToggleRequestAuth({ toggle: false }));
                        setLocationPage();
                    }
                    dispatch(userActions.setUser({ ...response.data }));
                }, 1000);

                return;
            }

            alert.setToggleAlert(false);
            alert.setIconAlert(null);
            alert.setTitleAlert(null);
            dispatch(authActions.setLockAuthModal({ lock: false }));

            throw new ErrorService(
                response.data.errorName,
                response.data.message,
                response.data.errorLogList,
            );
        } catch (error) {
            if (Object.keys(error.errorLogList).length > 0) {
                setErrorLogList(error.errorLogList);
            }
        }
    };

    const signIn = async (alert, data, setErrorLogList, requestAuth = false) => {
        try {
            dispatch(authActions.setLockAuthModal({ lock: true }));
            alert.setToggleAlert(true);
            alert.setIconAlert('loading');
            alert.setTitleAlert('Авторизация...');

            const response = await authService.logIn(data);

            if (response.status === 200) {
                alert.setIconAlert('success');
                alert.setTitleAlert(`Привет, ${response.data.userName}!`);

                setTimeout(() => {
                    alert.setToggleAlert(false);
                    alert.setIconAlert(null);
                    alert.setTitleAlert(null);
                    dispatch(authActions.setLockAuthModal({ lock: false }));
                    dispatch(authActions.setAuthStatus({ status: 'identifiedUser' }));
                    dispatch(authActions.setToggleAuthModal({ toggle: false }));
                    if (requestAuth) {
                        setLocationPage();
                        dispatch(authActions.setToggleRequestAuth({ toggle: false }));
                    }
                    dispatch(userActions.setUser({ ...response.data }));
                }, 1000);

                return;
            }

            alert.setToggleAlert(false);
            alert.setIconAlert(null);
            alert.setTitleAlert(null);
            dispatch(authActions.setLockAuthModal({ lock: false }));

            throw new ErrorService(
                response.data.errorName,
                response.data.message,
                response.data.errorLogList,
            );
        } catch (error) {
            if (Object.keys(error.errorLogList).length > 0) {
                setErrorLogList(error.errorLogList);
            }
        }
    };

    const signOut = async () => {
        await authService.logOut();
        setLocationPage('/');
        dispatch(userActions.resetUser());
        dispatch(authActions.setAuthStatus({ status: 'unidentifiedUser' }));
    };

    const refresh = async () => {
        try {
            const response = await authService.refresh();

            if (response.status === 200) {
                const { userId, userName, userEmail, userImgUrl, accessToken } = response.data;

                dispatch(authActions.setAuthStatus({ status: 'identifiedUser' }));
                dispatch(authActions.setAccessToken({ token: accessToken }));
                dispatch(userActions.setUser({ userId, userName, userEmail, userImgUrl }));
                return;
            }

            dispatch(authActions.setAuthStatus({ status: 'unidentifiedUser' }));
            throw new ErrorService(
                response.data.errorName,
                response.data.message,
                response.data.errorList,
            );
        } catch (error) {
        }
    };

    return {
        openAuthModal,
        closeAuthModal,
        setAuthFormType,
        setToggleRequestAuth,
        signUp,
        signIn,
        signOut,
        refresh,
    };
};

export { useAuthController };
