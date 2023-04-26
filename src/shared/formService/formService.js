class formService {
	constructor() {
		this.fileList = {};
	}

	pushFile = (file) => {
		this.fileList[file.name] = file;
	};

	collectDataNewPost = (data) => {
		const formData = new FormData();
		const dataJSON = JSON.stringify(data);
		formData.append('dataNewPost', dataJSON);

		if (Object.entries(this.fileList).length > 0) {
			data.postSchema.forEach((schemaItem) => {
				if (schemaItem.type === 'image') {
					formData.append(`${schemaItem.id}`, this.fileList[schemaItem.id]);
				}
			});
		}
		return formData;
	};
}

export default new formService();
