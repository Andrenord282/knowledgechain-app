import useInheritClasses from 'hooks/useInheritClasses';

import PostHeader from 'сomponents/PostHeader/PostHeader';
import PostBar from 'сomponents/PostBar/PostBar';
import PostContent from 'сomponents/PostContent/PostContent';
import PostThemes from 'сomponents/PostThemes/PostThemes';
import PostFooter from 'сomponents/PostFooter/PostFooter';


import 'сomponents/Post/Post.scss';

const Post = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	return (
		<div className={setInheritClasses + ' post'}>
			<PostHeader inheritClasses="post__header" />
			<PostBar inheritClasses="post__bar" />
			<PostContent inheritClasses="post__content" />
			<PostThemes inheritClasses="post__themes" />
			<PostFooter inheritClasses="post__footer"/>
		</div>
	);
};

export default Post;
