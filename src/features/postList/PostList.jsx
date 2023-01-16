import useClasses from 'hooks/useClasses';
import useGetPostList from './hooks/useGetPostList';
import { memo } from 'react';

import Post from '../post';
import './PostList.scss';

const PostList = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const { isLoadedPost, postList } = useGetPostList();

	return (
		<ul className={inheritClasses + ' post-list'}>
			{isLoadedPost && (
				<>
					{postList.map((post) => {
						return (
							<li key={post._id} className="post-list__item">
								<Post {...post} />
							</li>
						);
					})}
				</>
			)}
			{!isLoadedPost && <div>загрузка</div>}
		</ul>
	);
};

export default memo(PostList);
