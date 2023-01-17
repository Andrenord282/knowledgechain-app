import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './SkeletonPost.scss';

const SkeletonPost = (props) => {
	const { count } = props;

	return Array(count)
		.fill('SkeletonPost')
		.map((_, index) => {
			return (
				<SkeletonTheme key={index} baseColor="#1e252b" highlightColor="#262d34">
					<div className=" skeleton-post">
						<div className="skeleton-post__header">
							<Skeleton className="skeleton-post__auth" />
							<Skeleton className="skeleton-post__date" />
						</div>
						<div className="skeleton-post__bar">
							<Skeleton className="skeleton-post__bar-item" />
						</div>
						<div className="skeleton-post__content">
							<Skeleton className="skeleton-post__title" />
							<Skeleton className="skeleton-post__text" />
						</div>
						<ul className="skeleton-post__themes">
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
							<Skeleton className="skeleton-post__item" />
						</ul>
						<div className="skeleton-post__footer">
							<Skeleton className="skeleton-post__footer-item" />
							<Skeleton className="skeleton-post__footer-item" />
						</div>
					</div>
				</SkeletonTheme>
			);
		});
};

export default SkeletonPost;
