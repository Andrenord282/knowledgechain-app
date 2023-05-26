//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import { selectUser } from 'store/slices/userSlice';

//-----actions-----//
import { setUser, resetUser } from 'store/slices/userSlice';

const useUserSlice = () => {
	const dispatch = useDispatch();
	const { loadedUser, idUser, userName, email, userImgUrl } = useSelector(selectUser);

	const handlerSetUser = (data) => {
		dispatch(setUser(data));
	};

	const handlerResetUser = () => {
		dispatch(resetUser());
	};

	return {
		loadedUser,
		idUser,
		userName,
		email,
		userImgUrl,
		handlerSetUser,
		handlerResetUser,
	};
};

export default useUserSlice;
