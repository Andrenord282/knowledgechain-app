import useInheritClasses from 'hooks/useInheritClasses';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setAuthor } from 'Redux/slices/newPostSlice';

import NewPostScheme from 'сomponents/NewPostScheme/NewPostScheme';

import 'сomponents/NewPostCreator/NewPostCreator.scss';

const NewPostCreator = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	const dispatch = useDispatch();
	const author = useSelector((state) => state.user.displayName);

	useEffect(() => {
		dispatch(setAuthor({ author }));
	});

	return (
		<div className={setInheritClasses + ' new-post-creator'}>
			<div className="new-post-creator__contaner">
				<div className="new-post-creator__content">
					<NewPostScheme inheritClasses="new-post-creator__scheme" />
				</div>
			</div>
		</div>
	);
};

export default NewPostCreator;
