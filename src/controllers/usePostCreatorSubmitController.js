//-----modules-----//
import formService from 'shared/formService';
import postService from 'services/axios/api/postService';
import { ErrorService, errorAuthList } from 'shared/errorService/errorService';

//-----hooks-----//
import useNavigateLocation from 'hooks/useNavigateLocation';

const usePostCreatorSubmitController = () => {
	const { setLocationPage } = useNavigateLocation();

	const submitPost = async (alert, postParams, postSchema, postTopics) => {
		try {
			alert.setToggleAlert(true);
			alert.setIconAlert('loading');
			alert.setTitleAlert('Отправка поста...');
			const post = formService.collectPostData({ postParams, postSchema, postTopics });
			const response = await postService.createPost(post);
			if (response.status === 200) {
				alert.setIconAlert('success');
				alert.setTitleAlert(response.data.message);
				setTimeout(() => {
					alert.setToggleAlert(false);
					alert.setIconAlert(null);
					alert.setTitleAlert(null);
					setLocationPage();
				}, 700000);
				return;
			}
			throw new ErrorService(response.data.errorName, response.data.message);
		} catch (error) {
			console.log(error);
			alert.setIconAlert('error');
			alert.setTitleAlert(error.message);
			setTimeout(() => {
				alert.setToggleAlert(false);
				alert.setIconAlert(null);
				alert.setTitleAlert(null);
			}, 1000000);
		}
	};

	return {
		submitPost,
	};
};

export { usePostCreatorSubmitController };
