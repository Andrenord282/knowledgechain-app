//-----slice-----//
export { authReducer } from './authSlice';

//-----selectors-----//
export {
    selectAuthStatus,
    selectRequestAuth,
    selectToggleAuthModal,
    selectLockAuthModal,
    selectTypeAuth,
    selectAccessToken,
} from './selectors';

//-----actions-----//
export { authActions } from './authSlice';
