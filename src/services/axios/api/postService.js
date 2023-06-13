import apiServer from 'services/axios/client';

class PostsService {
	createPost = async (data) => {
		try {
			console.log(data);
			const response = await apiServer.post('/post', data);
			return response;
		} catch (error) {
			return error.response;
		}
	};
	getPosts = async (query) => {
		try {
			const response = await apiServer.get('/post', { params: { ...query } });
			return response;
		} catch (error) {
			return error.response;
		}
	};
}

export default new PostsService();
