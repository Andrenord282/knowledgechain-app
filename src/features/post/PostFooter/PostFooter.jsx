import useClasses from 'hooks/useClasses';

import * as Icon from 'сomponents/_global/Icon';
import './PostFooter.scss';

const PostFooter = ({ classes, viewCounter, commentsCounter }) => {
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' post-footer'}>
			<div className="post-footer__item">
				<Icon.View className="post-footer__icon" />
				<span className="post-footer__value">{viewCounter}</span>
			</div>
			<div className="post-footer__item">
				<Icon.Comments className="post-footer__icon" />
				<span className="post-footer__value">{commentsCounter}</span>
			</div>
		</div>
	);
};

export default PostFooter;
