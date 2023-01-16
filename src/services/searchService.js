import apiServer from 'axiosClient/index';

class searchService {
	searchAuthor = async (params, query, callback) => {
		try {
			if (query) {
				const response = await apiServer.get(`/search/${params}/`, {
					params: { author: query },
				});
				if (callback) {
					callback(response.data);
				}
				return response;
			}
		} catch (error) {
			return error.response;
		}
	};

	searchValue = async (params, query, callback) => {
		try {
			if (query) {
				const response = await apiServer.get(`/search/${params}/`, {
					params: { ...query },
				});
				if (callback) {
					callback(response.data);
				}
				return response;
			}
		} catch (error) {
			return error.response;
		}
	};
}

export default new searchService();
