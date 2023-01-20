const usePostCreatorForm = (data) => {
	const formData = new FormData();

	const readyForm = () => {
		console.log(123);
		const dataSchema = data.schemaPost.map((dataItem) => {
			const { id, name, type, value, file } = dataItem;
			if (file !== undefined) {
				const fileName = file.name.replace(/.+?\./, `${id}.`);
				formData.set(id, file, fileName);
				return { id, name, type, value };
			} else {
				return dataItem;
			}
		});

		// if (!formData.entries().next().done) {
		// 	formData.set('postName', postCreator.postName);
		// }

		return {
			...data,
			schemaPost: [...dataSchema],
		};
	};

	return { formData, readyForm };
};

export default usePostCreatorForm;
