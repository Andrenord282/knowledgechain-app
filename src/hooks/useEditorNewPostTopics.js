//-----modules-----//
import searchService from 'services/axios/api/searchService';

//-----hooks-----//
import { useEffect, useRef, useState } from 'react';
import useInputChange from 'hooks/useInputChange';
import useDebouncePromise from './useDebouncePromise';
import useEditorNewPostSlice from './slices/useEditorNewPostSlice';
import useFocusComponent from 'hooks/useFocusComponent';

const useEditorNewPostTopics = () => {
	const focusRef = useRef(null);
	const handlerFocus = useFocusComponent(focusRef);
	const editorNewPostModel = useEditorNewPostSlice();
	const input = useInputChange('');
	const [variantListApi, setVariantListApi] = useState([]);
	const [selectedList, setSelectedList] = useState([]);
	const [siblingList, setSiblingList] = useState([]);
	const debounsSearch = useDebouncePromise(searchService.searchValue, 500);

	const requestVariantTopic = async () => {
		const response = await debounsSearch('topics', { topicName: input.value });
		if (response.status === 200) {
			setVariantListApi(response.data);
		}
	};

	const handleKeyUp = (e) => {
		input.handleKeyUp(e, () => {
			setVariantListApi([]);
		});
	};

	const searchSiblingTopics = async (value) => {
		const response = await searchService.searchValue('sibling-topics', { topicName: value });
		setSiblingList(response.data);
	};

	const addSelectedListItem = (e) => {
		const self = e.target;
		if (self.closest('.editor-new-post-topics__btn-variant')) {
			const newListItem = self.closest('.editor-new-post-topics__btn-variant').textContent.trim();
			if (!selectedList.includes(newListItem)) {
				setSelectedList((oldList) => [...oldList, newListItem]);
			}
			input.onReset();
			setVariantListApi([]);
			editorNewPostModel.updatePostTopics(newListItem, 'add');
			searchSiblingTopics(newListItem);
			handlerFocus.onFocus();
		}
	};

	const addSiblingListItem = (e) => {
		const self = e.target;
		if (self.closest('.editor-new-post-topics__btn-sibling')) {
			const newListItem = self.closest('.editor-new-post-topics__btn-sibling').textContent.trim();
			if (!selectedList.includes(newListItem)) {
				setSelectedList((oldList) => [...oldList, newListItem]);
			}
			setSiblingList((oldList) => oldList.filter((listItem) => listItem.name !== newListItem));
			editorNewPostModel.updatePostTopics(newListItem, 'add');
			handlerFocus.onFocus();
		}
	};

	const deleteSelectedListItem = (e) => {
		const self = e.target;
		if (self.closest('.editor-new-post-topics__btn-selected')) {
			const deleteListItem = self.closest('.editor-new-post-topics__btn-selected').textContent.trim();
			setSelectedList((oldList) => oldList.filter((listItem) => listItem !== deleteListItem));
			editorNewPostModel.updatePostTopics(deleteListItem, 'delete');
		}
	};

	useEffect(() => {
		if (input.value.length >= 2) {
			requestVariantTopic();
		}
	}, [input.value]);

	return {
		focusRef,
		inputValue: input.value,
		onChenge: input.onChenge,
		onReset: input.onReset,
		handleKeyDown: input.handleKeyDown,
		handleKeyUp,
		variantListApi,
		selectedList,
		siblingList,
		addSelectedListItem,
		addSiblingListItem,
		deleteSelectedListItem,
	};
};

export default useEditorNewPostTopics;
