import apiServer from 'axiosClient/index';

class FilesService {
	uploadsFiles = async (data) => {
		try {
			const response = await apiServer.post(
				'/uploads',
				data,
			);
			return response;
		} catch (error) {
			return error.response;
		}
	};
}

export default new FilesService();
