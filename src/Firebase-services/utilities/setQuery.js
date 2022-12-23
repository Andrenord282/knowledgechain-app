import { db } from 'Firebase-services';
import {
	collection,
	query,
	where,
	orderBy,
	startAfter,
	limit,
} from 'firebase/firestore';

const setQuery = (optionRequest, dataQuery) => {
	const { collectionRef, cursorItemPost, nameOrder, orderType, limitList } =
		optionRequest;
	const { author, date, themes, counterComments, counterRating, counterView } =
		dataQuery;

	if (cursorItemPost) {
		return query(
			collection(db, collectionRef),
			startAfter(cursorItemPost),
			limit(limitList),
		);
	} else if (limitList === false || limitList === undefined) {
		return query(
			collection(db, collectionRef),
			orderBy(`${nameOrder}`, `${orderType}`),
		);
	} else {
		return query(
			collection(db, collectionRef),
			where(date.name, date.operator, date.value),
			where(author.name, author.operator, author.value),
			where(themes.name, themes.operator, themes.value),
			where(
				counterComments.name,
				counterComments.operator,
				counterComments.value,
			),
			where(counterRating.name, counterRating.operator, counterRating.value),
			where(counterView.name, counterView.operator, counterView.value),
			orderBy(`${nameOrder}`, `${orderType}`),
			limit(limitList),
		);
	}
};

export { setQuery };
