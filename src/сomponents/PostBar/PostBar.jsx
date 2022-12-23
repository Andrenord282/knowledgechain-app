import useInheritClasses from 'hooks/useInheritClasses';

import Button from 'сomponents/Button/Button';
import { ReactComponent as IconMarker } from 'assets/img/svg/icon-marker.svg';
import { ReactComponent as IconArrow } from 'assets/img/svg/icon-arrow.svg';

import 'сomponents/PostBar/PostBar.scss';
const PostBar = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);

	return (
		<div className={setInheritClasses + ' post-bar'}>
			<Button inheritClasses="post-bar__marker btn_marker-post">
				<IconMarker className="btn__icon" />
			</Button>
			<Button inheritClasses="post-bar__rating-up btn_rating-up-post">
				<IconArrow className="btn__icon" />
			</Button>
			<span className="post-bar__rating-value">100</span>
			<Button inheritClasses="post-bar__btn-rating-down btn_rating-down-post">
				<IconArrow className="btn__icon" />
			</Button>
		</div>
	);
};

export default PostBar;
