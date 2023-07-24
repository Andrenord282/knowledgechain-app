//-----modules-----//
import classNames from "classnames";

//-----components-----//
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

//-----style-----//
import 'react-loading-skeleton/dist/skeleton.css';
import './PostListItemSkeleton.scss';

const PostListItemSkeleton = (props) => {
    const { classes, count } = props;

    return (
        new Array(count).fill(0).map((_, index) => {
            return (

                <div key={index} className={classNames(classes, 'post-list-skeleton-item')}>
                    <SkeletonTheme baseColor="#1e252b" highlightColor="#2c353d" enableAnimation={true}  >
                        <div className="post-list-skeleton-item__header">
                            <Skeleton count={1} width={'100%'} height={'100%'} />
                        </div>
                        <div className="post-list-skeleton-item__body">
                            <Skeleton count={1} width={'100%'} height={'100%'} />
                        </div>
                        <div className="post-list-skeleton-item__footer">
                            <Skeleton count={1} width={'100%'} height={'100%'} />
                        </div>
                    </SkeletonTheme>
                </div>
            );
        })
    );
};

export default PostListItemSkeleton;