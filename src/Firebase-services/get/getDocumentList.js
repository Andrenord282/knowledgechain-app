import { collection, query, getDocs } from 'firebase/firestore';

import { db } from 'Firebase-services';
import { setQuery } from 'Firebase-services/utilities/setQuery';

const getDocumentList = async (optionRequest) => {
	const testQuery = {
		date: {
			name: 'date',
			value: 1,
			operator: '>',
		},
		author: {
			name: 'author',
			value: 'Doomer',
			operator: '==',
		},
		themes: {
			name: 'themes',
			value: [123],
			operator: 'array-contains-any',
		},
		counterComments: {
			name: 'null',
			value: 'null',
			operator: '==',
		},
		counterRating: {
			name: 'null',
			value: 'null',
			operator: '==',
		},
		counterView: {
			name: 'null',
			value: 'null',
			operator: '==',
		},
	};

	const query = setQuery(optionRequest, testQuery);
    // console.log(query);
	try {
		const documentListReq = [];
		const documentListReady = [];
		let lastItemDoc;

		const queryDocumentList = await getDocs(query);
		/* если длина полученного списка документов не равна лимиту,
	 	то очистить курсор списка, если длина равна лимиту, то обновить курсор для списка
         */
		if (queryDocumentList.docs.length !== 10) {
			lastItemDoc = null;
		} else {
			lastItemDoc = queryDocumentList.docs[queryDocumentList.docs.length - 1];
		}

		queryDocumentList.forEach((currentDocument) => {
			console.log(123);
			const unpackingDocument = currentDocument.data();
			documentListReq.push(unpackingDocument);
		});

		documentListReq.forEach((document) => {
			documentListReady.push(document);
		});
		return { documentListReady, lastItemDoc };
	} catch (error) {
		console.log(error);
	}

	// console.log(query);

	// /* 	создаем массив для списков документов documentListReq хранить в себе
	// список документов, которые еще не готовы к использованию, например,
	// некоторые поля могут ссылатсья на другие документы, а список documentListReady
	// уже готов к использованию
	// */

	// try {
	// 	// делаем запрос в коллекцию, что бы поулчить документы в виде списка коллекции
	// 	const queryDocumentList = await getDocs(setColection);
	// 	/* если длина полученного списка документов не равна лимиту,
	// 	то очистить курсор списка, если длина равна лимиту, то обновить курсор для списка
	// 	 */
	// 	if (queryDocumentList.docs.length !== 10) {
	// 		lastItemDoc = null;
	// 	} else {
	// 		lastItemDoc = queryDocumentList.docs[queryDocumentList.docs.length - 1];
	// 	}

	// 	// распаковка списка постов
	// 	queryDocumentList.forEach((currentDocument) => {
	// 		const unpackingDocument = currentDocument.data();
	// 		documentListReq.push(unpackingDocument);
	// 	});
	// 	/*создаем обьект setDocumentList, куда будем записывать поля и значения распаковваного поста
	// 	проходимся по распакованным постам, проверяем существуют ли поля,
	// 	которые ссылаются на другую коллекцию и другой документ в базе, или ссылаются на файл с хранилища если такое поле находим,
	// 	то делаем запрос на документ по ссылке или завпрос на файл, распаковываем их и добавляем значение в нужное
	// 	поле в объект setPost, в конце пушим setPost в массив готовых постов
	// 	*/

	// 	if (subCollection) {
	// 		for (let i = 0; i < documentListReq.length; i++) {
	// 			const documentReq = documentListReq[i];
	// 			const document = await requestSubDocument(documentReq);
	// 			documentListReady.push(document);
	// 		}
	// 	} else {
	// 		documentListReq.forEach((document) => {
	// 			documentListReady.push(document);
	// 		});
	// 	}

	// 	// возвращаем список постов и курсор для поиска следущего списка досументов
	// 	return { documentListReady, lastItemDoc };
	// } catch (error) {
	// 	console.log(error);
	// }
};

export default getDocumentList;
