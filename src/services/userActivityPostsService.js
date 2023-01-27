import apiServer from 'axiosClient/index';

class UserActivityPostsService {
	getUserActivityPosts = async (option) => {
		try {
			const response = await apiServer.get('/user-activity-posts', {
				params: option,
			});
			return response;
		} catch (error) {
			return error.response;
		}
	};

	markPost = async (data) => {
		try {
			const response = await apiServer.post('/mark-post', data);
			return response;
		} catch (error) {
			return error.response;
		}
	};
	ratingPost = async (data) => {
		try {
			const response = await apiServer.post('/rating-post', data);
			return response;
		} catch (error) {
			return error.response;
		}
	};
}

export default new UserActivityPostsService();
