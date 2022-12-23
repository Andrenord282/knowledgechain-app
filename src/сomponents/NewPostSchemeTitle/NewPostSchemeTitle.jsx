import useInheritClasses from 'hooks/useInheritClasses';
import useInputChange from 'hooks/useInputChange';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateSchemeTitle } from 'Redux/slices/newPostSlice';

import TextArea from 'сomponents/TextArea/TextArea';

const NewPostSchemeTitle = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	const dispatch = useDispatch();
	const titleSlice = useSelector((state) => state.newPost.schemePost[0].value);
	const titleState = useInputChange(titleSlice);

	useEffect(() => {
		dispatch(updateSchemeTitle({ title: titleState.value }));
	}, [titleState.value]);

	return (
		<TextArea
			inheritClasses={setInheritClasses + ' custom-focus text-area_title'}
			placeholder="Напишите заголовок"
			value={titleSlice}
			handlerChange={titleState.onChenge}
		/>
	);
};

export default NewPostSchemeTitle;
