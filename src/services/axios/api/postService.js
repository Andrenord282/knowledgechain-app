import apiServer from 'services/axios/client';

class PostsService {
	createNewPost = async (data) => {
		try {
			const response = await apiServer.post('/posts', data);
			return response;
		} catch (error) {
			return error.response;
		}
	};
	getPosts = async (option) => {
		try {
			const response = await apiServer.get('/posts', {
				params: option,
			});
			return response;
		} catch (error) {
			return error.response;
		}
	};

	getThemes = async (themeName) => {
		try {
			const response = await apiServer.get('/post-themes', { themeName: themeName });
			return response;
		} catch (error) {
			return error.response;
		}
	};
}

export default new PostsService();
