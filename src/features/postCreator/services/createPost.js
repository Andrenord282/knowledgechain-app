const createPost = async (data) => {
	try {
		const response = await apiServer.post('/posts', data);
		return response;
	} catch (error) {
		return error.response;
	}
};

export default createPost;
