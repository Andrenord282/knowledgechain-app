import { doc } from 'firebase/firestore';
import { db } from 'Firebase-services';

const createCounterShards = (
	batch,
	rootCollection,
	refCollection,
	amountShards = 5,
	nameShard,
) => {
	for (let i = 0; i < amountShards; i++) {
		const shardsRef = doc(db, rootCollection, `${refCollection}-${i}`);
		batch.set(shardsRef, {
			name: nameShard,
			count: Math.floor(Math.random() * 5),
		});
	}
};

export default createCounterShards;
