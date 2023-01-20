import useClasses from 'hooks/useClasses';
import useGetPostList from './hooks/useGetPostList';
import useUpdatePostList from './hooks/useUpdatePostList';
import { memo, useMemo } from 'react';

import Post from '../post';
import { SkeletonPost } from 'сomponents/Skeleton';
import './PostList.scss';

const PostList = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const { isLoadedPost, postListIsOver, postList } = useGetPostList();
	const { triggeriItemLoading } = useUpdatePostList();

	return (
		<ul className={inheritClasses + ' post-list'}>
			{postList.length > 0 && (
				<>
					{postList.map((post, index) => {
						if (index === postList.length - 3 && !postListIsOver) {
							return (
								<li
									ref={triggeriItemLoading}
									key={post._id}
									className="post-list__item" dada-kek="123">
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
