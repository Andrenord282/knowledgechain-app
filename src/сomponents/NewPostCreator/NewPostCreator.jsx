import { nanoid } from 'nanoid';
import useInheritClasses from 'hooks/useInheritClasses';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setParamsPost } from 'Redux/slices/newPostSlice';

import NewPostScheme from 'сomponents/NewPostScheme/NewPostScheme';

import 'сomponents/NewPostCreator/NewPostCreator.scss';

const NewPostCreator = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	const dispatch = useDispatch();
	const { userName, userId } = useSelector((state) => state.user);
	const postId = nanoid(5);

	useEffect(() => {
		dispatch(
			setParamsPost({
				userName,
				userId,
				postId,
				postName: `${userName}-${postId}`,
			}),
		);
	}, [userName]);

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
