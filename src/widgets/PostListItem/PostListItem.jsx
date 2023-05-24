//-----modules-----//

//-----router-----//

//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----redux-----//

//-----widgets-----//

//-----сomponents-----//
import PostListItemHeader from './components/PostListItemHeader';
import PostListItemRating from './components/PostListItemRating';
import PostListItemBody from './components/PostListItemBody';
import PostListItemFooter from './components/PostListItemFooter';

//-----style-----//
import './PostListItem.scss';

const PostListItem = (props) => {
	const { classes, author, createdAt, view, postSchema } = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' post-list-item'}>
			<PostListItemHeader classes="post-list-item__header" author={author} createdAt={createdAt} view={view} />
			<PostListItemRating classes="post-list-item__rating" />
			<PostListItemBody classes="post-list-item__body" postSchema={postSchema} />
			<PostListItemFooter classes="post-list-item__footer" />
		</div>
	);
};

export default PostListItem;
