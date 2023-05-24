//-----modules-----//

//-----router-----//

//-----hooks-----//
import { useEffect } from 'react';
import useClasses from 'hooks/useClasses';
import usePostListSlice from 'hooks/slices/usePostListSlice';

//-----redux-----//

//-----widgets-----//
import PostListItem from '../PostListItem';

//-----сomponents-----//

//-----style-----//
import './PostList.scss';

const PostList = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const postListModel = usePostListSlice();

	useEffect(() => {
		if (!postListModel.postListLoaded) {
			postListModel.requestPostList();
		}
	}, [postListModel.postListLoaded]);

	return (
		<div className={inheritClasses + ' post-list'}>
			{postListModel.postList.length > 0 &&
				postListModel.postList.map((postListItem) => {
					return <PostListItem classes="post-list__item" key={postListItem._id} {...postListItem} />;
				})}
		</div>
	);
};

export default PostList;
