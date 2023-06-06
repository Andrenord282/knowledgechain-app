//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import { selectUser } from 'store/userSlice';

//-----actions-----//
import { userActions } from 'store/userSlice';

const useUserSlice = () => {
	const dispatch = useDispatch();
	const { loadedUser, userId, userName, email, userImgUrl } = useSelector(selectUser);

	const handlerSetUser = (data) => {
		dispatch(userActions.setUser(data));
	};

	const handlerResetUser = () => {
		dispatch(userActions.resetUser());
	};

	return {
		loadedUser,
		userId,
		userName,
		email,
		userImgUrl,
		handlerSetUser,
		handlerResetUser,
	};
};

export default useUserSlice;
