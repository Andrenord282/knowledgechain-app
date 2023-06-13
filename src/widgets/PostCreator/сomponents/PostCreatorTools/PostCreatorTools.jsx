//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import PostCreatorAddText from '../PostCreatorAddText';
import PostCreatorDelete from '../PostCreatorDelete';
import PostCreatorAddImage from '../PostCreatorAddImage';

//-----style-----//
import './PostCreatorTools.scss';

const PostCreatorTools = (props) => {
	const { classes, schemaItemIndex, schemaLength } = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={`${inheritClasses} post-creator-tools`}>
			<PostCreatorAddText classes="post-creator-tools__btn-tools" schemaItemIndex={schemaItemIndex} />
			<PostCreatorAddImage classes="post-creator-tools__btn-tools" schemaItemIndex={schemaItemIndex} />
			{schemaLength > 2 && (
				<PostCreatorDelete classes="post-creator-tools__btn-tools" schemaItemIndex={schemaItemIndex} />
			)}
		</div>
	);
};

export default PostCreatorTools;
