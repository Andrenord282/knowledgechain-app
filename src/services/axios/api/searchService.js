import apiServer from 'services/axios/client';

class searchService {
	searchValue = async (params, query) => {
		try {
			const response = await apiServer.get(`/search/${params}/`, {
				params: { ...query },
			});

			return response;
		} catch (error) {
			return error.response;
		}
	};
}

export default new searchService();
