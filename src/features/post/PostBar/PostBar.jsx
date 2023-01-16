import useClasses from 'hooks/useClasses';

import Button from 'сomponents/Button';
import * as Icon from 'сomponents/_global/Icon';
import './PostBar.scss';

const PostBar = ({ classes, ratingCounter }) => {
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' post-bar'}>
			<Button classes="post-bar__marker btn_marker-post">
				<Icon.Marker className="btn__icon" />
			</Button>
			<Button classes="post-bar__rating-up btn_rating-up-post">
				<Icon.Arrow className="btn__icon" />
			</Button>
			<span className="post-bar__rating-value">{ratingCounter}</span>
			<Button classes="post-bar__btn-rating-down btn_rating-down-post">
				<Icon.Arrow className="btn__icon" />
			</Button>
		</div>
	);
};

export default PostBar;
