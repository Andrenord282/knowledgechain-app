const setfilesRef = (data, filePaths) => {
	if (filePaths.length >= 1) {
		let readyData = JSON.parse(JSON.stringify(data));
		filePaths.forEach((filePath) => {
			const fileDataIndex = data.findIndex((dataItem) => {
				return dataItem.id === filePath.id;
			});
			readyData[fileDataIndex].dataUrl = null;
			readyData[fileDataIndex].value = filePath.fileRef;
		});
		return readyData;
	} else {
		return data;
	}
};

export default setfilesRef;
