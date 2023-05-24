//-----modules-----//

//-----router-----//

//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----redux-----//

//-----widgets-----//

//-----сomponents-----//
import LinkCustom from 'сomponents/LinkCustom';

//-----style-----//
import './PostListItemBodyTitle.scss';

const PostListItemBodyTitle = (props) => {
	const { classes, titleText } = props;
	const inheritClasses = useClasses(classes);

	return (
		<LinkCustom link={'/page-post'} target="_blank" classes={inheritClasses + ' post-list-item-body-title'}>
			<h3 className="post-list-item-body-title__text">{titleText}</h3>
		</LinkCustom>
	);
};

export default PostListItemBodyTitle;
