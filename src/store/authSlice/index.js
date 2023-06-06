//-----slice-----//
export { authReducer } from './authSlice';

//-----selectors-----//
export {
	selectLoadedAuth,
	selectRequestAuth,
	selectStatusAuth,
	selectToggleAuthModal,
	selectLockAuthModal,
	selectTypeAuth,
} from './selectors';

//-----actions-----//
export { authActions } from './authSlice';
