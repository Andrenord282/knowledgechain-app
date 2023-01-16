import useClasses from 'hooks/useClasses';

import './PostHeader.scss';

const PostHeader = ({ classes, author, date }) => {
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' post-header'}>
			<div className="post-header__author">автор: {author}</div>
			<div className="post-header__date">{date}</div>
		</div>
	);
};

export default PostHeader;
