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
	getPosts = async (query) => {
		try {
			const response = await apiServer.get('/posts', { params: { ...query } });
			return response;
		} catch (error) {
			return error.response;
		}
	};
}

export default new PostsService();
