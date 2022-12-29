import apiServer from 'axiosClient/index';

class PostsService {
	createNewPost = async (data) => {
		try {
			const response = await apiServer.post(
				'http://localhost:4000/posts',
				data,
			);
			return response;
		} catch (error) {
			return error.response;
		}
	};
}

export default new PostsService();
