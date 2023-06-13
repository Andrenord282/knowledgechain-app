class formService {
	constructor() {
		this.fileList = {};
	}

	pushFile = (nameId, file) => {
		this.fileList[nameId] = file;
	};

	collectPostData = (data) => {
		const formData = new FormData();
		const dataJSON = JSON.stringify(data);
		formData.append('postData', dataJSON);

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
