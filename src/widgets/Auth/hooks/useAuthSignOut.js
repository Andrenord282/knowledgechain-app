//-----modules-----//
import authService from 'services/axios/api/authService';
import errorService from 'shared/errorService/errorService';

//-----hooks-----//
import useUserSlice from 'hooks/slices/useUserSlice';
import useAuthSlice from 'hooks/slices/useAuthSlice';

const useAuthSignOut = () => {
	const userModel = useUserSlice();
	const authModel = useAuthSlice();

	return async () => {
		authService.logOut();
		userModel.setResetUser();
		userModel.setLoadedUser(false);
		authModel.setStatusAuthUser(false);
	};
};

export default useAuthSignOut;
