//-----modules-----//
import searchService from 'services/axios/api/searchService';
import { ErrorService } from 'shared/errorService/errorService';

import { useEffect, useRef, useState } from 'react';
import useInputChange from 'hooks/useInputChange';
import useDebouncePromise from 'hooks/useDebouncePromise';
import useFocusComponent from 'hooks/useFocusComponent';

//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { postCreatorTopicsActions } from 'store/postCreatorTopicsSlice';

const usePostCreatorTopicsController = () => {
	const dispatch = useDispatch();
	const debounceSearch = useDebouncePromise(searchService.search, 700);

	const requestTopics = async (topicName) => {
		try {
			const response = await debounceSearch('topics', { topicName });
			if (response.status === 200) {
				return response.data;
			}

			throw new ErrorService(response.data.errorName, response.data.message, response.data.errorLogList);
		} catch (error) {}
	};

	const addTopic = (topicName) => {
		dispatch(postCreatorTopicsActions.addTopic({ topicName }));
	};

	const deleteTopic = (topicIndex) => {
		dispatch(postCreatorTopicsActions.deleteTopic({ topicIndex }));
	};

	return {
		requestTopics,
		addTopic,
		deleteTopic,
	};
};

export { usePostCreatorTopicsController };
