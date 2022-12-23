import { nanoid } from 'nanoid';
import setCurrentDate from 'hooks/useDate';

import { writeBatch, doc } from 'firebase/firestore';
import fileSender from './fileSender';
import collectFiles from 'Firebase-services/utilities/collectFiles';
import setfilesRef from 'Firebase-services/utilities/setfilesRef';
import createCounterShards from './createCounterShards';

import { db } from 'Firebase-services';

const sendPost = async (dataPost) => {
	const { schemePost } = dataPost;

	const newPost = {
		id: nanoid(10),
		date: setCurrentDate(),
		author: dataPost.author,
		counterComments: 0,
		counterRating: 0,
		counterView: 0,
	};

	try {
		const files = collectFiles(dataPost.schemePost);
		const sendFile = await fileSender(files, 'posts-img', newPost.id);

		const readyScheme = setfilesRef(schemePost, sendFile);
		newPost.schemePost = readyScheme;

		const batch = writeBatch(db);

		const refRoot = 'posts';
		const refNewPost = doc(db, refRoot, newPost.id);
		const refShardsRating = `${newPost.id}/shardsRating/shardRating`;
		const refShardsComments = `${newPost.id}/shardsComments/shardComment`;
		const refShardsView = `${newPost.id}/shardsView/shardView`;

		batch.set(refNewPost, newPost);
		createCounterShards(batch, refRoot, refShardsRating, 10, 'rating');
		createCounterShards(batch, refRoot, refShardsComments, 10, 'comment');
		createCounterShards(batch, refRoot, refShardsView, 10, 'view');

		batch.commit();

		return { status: true };
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
		return { status: false };
	}
};

export default sendPost;
