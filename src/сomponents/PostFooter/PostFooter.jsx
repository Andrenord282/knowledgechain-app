import useInheritClasses from 'hooks/useInheritClasses';

import { ReactComponent as IconView } from 'assets/img/svg/icon-view.svg';
import { ReactComponent as IconComments } from 'assets/img/svg/icon-comments.svg';

import 'сomponents/PostFooter/PostFooter.scss';

const PostFooter = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	return (
		<div className={setInheritClasses + ' post-footer'}>
			<div className="post-footer__item">
				<IconView className="post-footer__icon" />
				<span className="post-footer__value">9999</span>
			</div>
			<div className="post-footer__item">
				<IconComments className="post-footer__icon" />
				<span className="post-footer__value">9999</span>
			</div>
		</div>
	);
};

export default PostFooter;
