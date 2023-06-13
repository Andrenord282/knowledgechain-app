import apiServer from 'services/axios/client';

class SearchService {
	search = async (value, query) => {
		try {
			const response = await apiServer.get(`/search/${value}/`, {
				params: { ...query },
			});

			return response;
		} catch (error) {
			return error.response;
		}
	};
}

export default new SearchService();
