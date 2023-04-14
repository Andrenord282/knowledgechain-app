//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import { selectUser } from '../../store/slices/userSlice';

//-----actions-----//
import { setUser, toggleLodaedUser, resetUser } from '../../store/slices/userSlice';

const useUserSlice = () => {
	const { isLoadedUser, idUser, userName, email, userImgUrl } = useSelector(selectUser);
	const dispatch = useDispatch();

	const writeSetUser = (data) => {
		dispatch(setUser(data));
	};

	const setLoadedUser = (status) => {
		dispatch(toggleLodaedUser({ isLoaded: status }));
	};

	const setResetUser = () => {
		dispatch(resetUser());
	};

	return {
		isLoadedUser,
		idUser,
		userName,
		email,
		userImgUrl,
		writeSetUser,
		setLoadedUser,
		setResetUser,
	};
};

export default useUserSlice;
