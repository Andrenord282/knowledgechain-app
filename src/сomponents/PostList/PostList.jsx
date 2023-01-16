import useClasses from 'hooks/useClasses';
import { memo } from 'react';

import Post from './Post';
import './PostList.scss';

const PostList = ({ classes, postList }) => {
	const inheritClasses = useClasses(classes);
	return (
		<ul className={inheritClasses + ' post-list'}>
			{postList.map((post) => {
				return (
					<Post
						key={post._id}
						{...post}
						classes="post-list__item"
					/>
				);
			})}
		</ul>
	);
};

export default memo(PostList);
