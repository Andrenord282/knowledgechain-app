//-----modules-----//
import formService from 'shared/formService';
import postService from 'services/axios/api/postService';
import errorService from 'shared/errorService/errorService';

//-----hooks-----//
import useNavigateLocation from 'hooks/useNavigateLocation';
import useCheckValidNewPost from './useCheckValidNewPost';

const useNewPostForm = (editorNewPostModel, setAlert) => {
	const checkValidNewPost = useCheckValidNewPost(editorNewPostModel.postSchema);
	const handlerNavigate = useNavigateLocation();

	const submitNewPost = async (e) => {
		try {
			e.preventDefault();
			if (checkValidNewPost.isValid) {
				setAlert.setToggleAlert(true);
				setAlert.setFields.iconAlert('loading');
				setAlert.setFields.titleAlert('Отправка поста...');
				const newPost = formService.collectDataNewPost(editorNewPostModel.dataNewPost);
				const response = await postService.createNewPost(newPost);
				console.log(response);
				if (response.status === 200) {
					setAlert.setFields.iconAlert('success');
					setAlert.setFields.titleAlert(response.data.message);
					setTimeout(() => {
						setAlert.setToggleAlert(false);
						setAlert.setFields.iconAlert(null);
						setAlert.setFields.titleAlert(null);
						handlerNavigate.setLocationPage();
					}, 700);
				}
				throw new errorService(response.data.errorName, response.data.message);
			} else {
				checkValidNewPost.setShowError(true);
			}
		} catch (error) {
			setAlert.setFields.iconAlert('error');
			setAlert.setFields.titleAlert(error.message);
			setTimeout(() => {
				setAlert.setToggleAlert(false);
				setAlert.setFields.iconAlert(null);
				setAlert.setFields.titleAlert(null);
			}, 1000);
		}
	};

	return {
		isValid: checkValidNewPost.isValid,
		showError: checkValidNewPost.showError,
		errorValidListNewPost: checkValidNewPost.errorValidListNewPost,
		submitNewPost,
	};
};
export default useNewPostForm;
