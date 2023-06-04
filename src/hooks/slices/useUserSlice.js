//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import { selectUser } from 'store/userSlice';

//-----actions-----//
import { setUser, resetUser } from 'store/userSlice';

const useUserSlice = () => {
	const dispatch = useDispatch();
	const { loadedUser, userId, userName, email, userImgUrl } = useSelector(selectUser);

	const handlerSetUser = (data) => {
		dispatch(setUser(data));
	};

	const handlerResetUser = () => {
		dispatch(resetUser());
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
