import useClasses from 'hooks/useClasses';
import useMarkPost from './hooks/useMarkPost';
import useRatingPost from './hooks/useRatingPost';

import { useSelector } from 'react-redux';
import { selectUser } from 'store/slices/userSlice';
import { selectUserActivityPosts } from 'store/slices/userActivityPostsSlice';

import Button from 'сomponents/Button';
import * as Icon from 'сomponents/_global/Icon';
import classNames from 'classnames';
import './PostBar.scss';

const PostBar = (props) => {
	const { classes, ratingCounter, indexPost } = props;
	const inheritClasses = useClasses(classes);
	const { idUser } = useSelector(selectUser);
	const { markedPosts, ratingPosts } = useSelector(selectUserActivityPosts);
	const { handlerMarkPost } = useMarkPost(idUser);
	const { handlerRatingPost, currentRating } = useRatingPost(idUser, ratingCounter, ratingPosts);

	const btnMarkClass = classNames({
		active: markedPosts[indexPost],
		'': markedPosts[indexPost] === undefined,
	});

	const btnLikeClass = classNames({
		active: ratingPosts[indexPost]?.value === 'inc',
		'': ratingPosts[indexPost]?.value === undefined,
	});

	const btnDislikeClass = classNames({
		active: ratingPosts[indexPost]?.value === 'dec',
		'': ratingPosts[indexPost]?.value === undefined,
	});

	return (
		<div className={inheritClasses + ' post-bar'}>
			<Button
				classes={'post-bar__marker btn_marker-post ' + btnMarkClass}
				data-index-post={indexPost}
				handleClick={handlerMarkPost}>
				<Icon.Marker className="btn__icon" />
			</Button>
			<Button
				classes={'post-bar__rating-up btn_rating-up-post post-bar__rating ' + btnLikeClass}
				data-value-rating="inc"
				data-index-post={indexPost}
				handleClick={handlerRatingPost}>
				<Icon.Arrow className="btn__icon" />
			</Button>
			<span className="post-bar__rating-value">{currentRating}</span>
			<Button
				classes={
					'post-bar__btn-rating-down btn_rating-down-post post-bar__rating ' +
					btnDislikeClass
				}
				data-value-rating="dec"
				data-index-post={indexPost}
				handleClick={handlerRatingPost}>
				<Icon.Arrow className="btn__icon" />
			</Button>
		</div>
	);
};

export default PostBar;
