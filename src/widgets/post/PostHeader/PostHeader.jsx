import useClasses from 'hooks/useClasses';
import { useGetTimeFromCurrentMoment } from 'hooks/useDate';

import './PostHeader.scss';

const PostHeader = ({ classes, author, date }) => {
	const inheritClasses = useClasses(classes);
	const renderDate = useGetTimeFromCurrentMoment(date);

	return (
		<div className={inheritClasses + ' post-header'}>
			<div className="post-header__author">автор: {author}</div>
			<div className="post-header__date">{renderDate}</div>
		</div>
	);
};

export default PostHeader;
