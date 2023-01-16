import useClasses from 'hooks/useClasses';

import PostHeader from './PostHeader';
import PostBar from './PostBar';
import PostContent from './PostContent';
import PostThemes from './PostThemes';
import PostFooter from './PostFooter';
import './Post.scss';

const Post = ({
	classes,
	_id,
	postId,
	postName,
	author,
	schemaPost,
	createdAt,
	ratingCounter,
	viewCounter,
	commentsCounter,
}) => {
	const inheritClasses = useClasses(classes);
	return (
		<div
			className={inheritClasses + ' post'}
			data-post-id={postId}
			data-post-name={postName}
			data-id-db={_id}>
			<PostHeader
				classes="post__header"
				author={author}
				date={createdAt}
			/>
			<PostBar classes="post__bar" ratingCounter={ratingCounter} />
			<PostContent classes="post__content" schemaPost={schemaPost} />
			<PostThemes classes="post__themes" />
			<PostFooter
				classes="post__footer"
				viewCounter={viewCounter}
				commentsCounter={commentsCounter}
			/>
		</div>
	);
};

export default Post;
