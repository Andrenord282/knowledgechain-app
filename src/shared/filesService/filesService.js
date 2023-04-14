class filesService {
	constructor() {
		// this.reader = new FileReader();
		this.fileList = [];
	}

	pushFile = (file) => {
		this.fileList.push(file);
	};
}

export default new filesService();
