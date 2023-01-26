import useClasses from 'hooks/useClasses';
import useMarkPost from './hooks/useMarkPost';

import Button from 'сomponents/Button';
import * as Icon from 'сomponents/_global/Icon';
import classNames from 'classnames';
import './PostBar.scss';

const PostBar = (props) => {
	const { classes, ratingCounter, indexPost } = props;
	const inheritClasses = useClasses(classes);
	const { handlerMarkPost, markedPosts } = useMarkPost();
	console.log(markedPosts);

	const btnMarkClass = classNames({
		active: markedPosts[indexPost],
		'': markedPosts[indexPost] === undefined,
	});

	return (
		<div className={inheritClasses + ' post-bar'}>
			<Button
				classes={'post-bar__marker btn_marker-post ' + btnMarkClass}
				data-index-post={indexPost}
				handleClick={handlerMarkPost}>
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
