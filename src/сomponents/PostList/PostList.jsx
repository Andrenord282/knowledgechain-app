import { memo } from 'react';

import Post from './Post';
import './PostList.scss';

import { useDispatch, useSelector } from 'react-redux';
import { optionsSelector } from 'store/slices/optionsPostListSlice/optionsPostListSlice';

const PostList = ({ postList }) => {
	const dispatch = useDispatch();
	const { isLoadedPost, ...optionsPostList } = useSelector(optionsSelector);

	return (
		<>
			{isLoadedPost && (
				<ul className="post-list">
					{postList.map((post) => {
						return <Post key={post._id} {...post} classes="post-list__item" />;
					})}
				</ul>
			)}
			{!isLoadedPost && <div>загрузка</div>}
		</>
	);
};

export default memo(PostList);
