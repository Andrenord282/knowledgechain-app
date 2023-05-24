//-----modules-----//

//-----router-----//

//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----redux-----//

//-----widgets-----//

//-----сomponents-----//

//-----style-----//
import './PostListItemRating.scss';

const PostListItemRating = (props) => {
	const { classes, author, createdAt, view } = props;
	const inheritClasses = useClasses(classes);

	return <div className={inheritClasses + ' post-list-item-rating'}>rating</div>;
};

export default PostListItemRating;
