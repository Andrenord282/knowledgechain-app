const collectFiles = (data) => {
	const files = [];
	data.forEach((dataItem) => {
		if (/image/.test(dataItem.type)) {
			const extension = dataItem.type.replace(/image\//, '.');
			files.push({ ...dataItem, extension });
		}
	});
	return files;
};

export default collectFiles;
