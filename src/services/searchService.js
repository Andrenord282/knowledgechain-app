import apiServer from 'axiosClient/index';

class searchService {
	searchValue = async (params, query, callback) => {
		try {
			console.log(query);
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
