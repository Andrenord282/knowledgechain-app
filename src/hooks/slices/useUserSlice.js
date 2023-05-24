//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import { selectUser } from 'store/slices/userSlice';

//-----actions-----//
import { setUser, resetUser } from 'store/slices/userSlice';

const useUserSlice = () => {
	const { isLoadedUser, idUser, userName, email, userImgUrl } = useSelector(selectUser);
	const dispatch = useDispatch();

	const handlerWriteSetUser = (data) => {
		dispatch(setUser(data));
	};

	const handlerResetUser = () => {
		dispatch(resetUser());
	};

	return {
		isLoadedUser,
		idUser,
		userName,
		email,
		userImgUrl,
		handlerWriteSetUser,
		handlerResetUser,
	};
};

export default useUserSlice;
