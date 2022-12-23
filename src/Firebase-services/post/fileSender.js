import { ref, uploadString } from 'firebase/storage';

import { storage } from 'Firebase-services';

const fileSender = async (data, rootDir, fileDir) => {
	try {
		if (data) {
			const filePaths = [];
			if (Array.isArray(data)) {
				data.forEach(async (dataItem) => {
					const { id, extension, dataUrl } = dataItem;
					const fileRef = `${rootDir}/${fileDir}/${id}${extension}`;
					const storageRef = ref(storage, fileRef);
					filePaths.push({ id, fileRef });
					await uploadString(storageRef, dataUrl, 'data_url');
				});
				return filePaths;
			}
		}
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
		return { status: false };
	}
};

export default fileSender;
