//-----modules-----//

//-----router-----//

//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----redux-----//

//-----widgets-----//

//-----сomponents-----//

//-----style-----//
import './PostListItemFooter.scss';

const PostListItemFooter = (props) => {
	const { classes, postListItem } = props;
	const inheritClasses = useClasses(classes);

	return <div className={inheritClasses + ' post-list-item-footer'}>footer</div>;
};

export default PostListItemFooter;
