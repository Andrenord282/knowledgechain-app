import useClasses from 'hooks/useClasses';
import useGetPostList from './hooks/useGetPostList';
import useUpdatePostList from './hooks/useUpdatePostList';

import { memo } from 'react';

import Post from '../post';
import { SkeletonPost } from 'сomponents/Skeleton';
import './PostList.scss';

const PostList = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const [setNode] = useUpdatePostList();
	const { postListIsOver, posts, isLoadedPost } = useGetPostList();
	return (
		<ul className={inheritClasses + ' post-list'}>
			{posts.length > 0 && (
				<>
					{posts.map((post, index) => {
						if (index === posts.length - 3 && !postListIsOver) {
							return (
								<li
									ref={setNode}
									key={post._id}
									className="post-list__item"
									dada-kek="123">
									<Post {...post} />
								</li>
							);
						}
						return (
							<li key={post._id} className="post-list__item">
								<Post {...post} />
							</li>
						);
					})}
				</>
			)}
			{!isLoadedPost && <SkeletonPost count={10} />}
		</ul>
	);
};

export default memo(PostList);
