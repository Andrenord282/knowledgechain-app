import apiServer from 'axiosClient/index';

class FilesService {
	uploadsFiles = async (data) => {
		try {
			const response = await apiServer.post(
				'http://localhost:4000/uploads',
				data,
			);
			return response;
		} catch (error) {
			return error.response;
		}
	};
}

export default new FilesService();
