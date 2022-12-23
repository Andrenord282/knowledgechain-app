import { nanoid } from 'nanoid';

import { sendPostURL } from './breakpoints';
import fileSender from 'Firebase-services/post/fileSender';
import collectFiles from 'Firebase-services/utilities/collectFiles';
import setfilesRef from 'Firebase-services/utilities/setfilesRef';

const sendPost = async (dataPost) => {
	const { schemePost } = dataPost;

	const newPost = {
		id: nanoid(10),
		author: dataPost.author,
		сommentsСounter: 0,
		ratingСounter: 0,
		viewСounter: 0,
	};

	try {
		const files = collectFiles(dataPost.schemePost);
		const sendFile = await fileSender(files, 'posts-img', newPost.id);

		const readyScheme = setfilesRef(schemePost, sendFile);
		newPost.schemePost = readyScheme;

		const send = await fetch(sendPostURL, {
			method: 'POST',
			body: JSON.stringify(newPost),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		return { status: send.status };
	} catch (error) {
		const errorMessage = error.message;
		console.log(errorMessage);
		return { status: false };
	}
};

export default sendPost;
