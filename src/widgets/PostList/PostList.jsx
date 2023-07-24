/* eslint-disable react-hooks/exhaustive-deps */
//-----modules-----//
import classNames from "classnames";

//-----router-----//

//-----hooks-----//
import { useEffect } from "react";
import { useIntersectionObserver } from "hooks/useIntersectionObserver ";

//-----controllers-----//
import { usePostListController } from "controllers";

//-----redux-----//
import { useSelector } from "react-redux";

//-----selectors-----//
import { selectCursor, selectFilter, selectLimit, selectPosts, selectPostsStatus, selectSort, selectTotalCount } from "store/postListSlice";

//-----components-----//
import Navigation from 'components/Navigation';
import LinkCustom from 'components/LinkCustom';
import * as Icon from 'components/Icon';
import PostListSort from "./components/PostListSort";
import PostListItem from './components/PostListItem';

//-----style-----//
import './PostList.scss';
import PostListItemSkeleton from "./components/PostListItemSkeleton";

const PostList = (props) => {
    const { classes } = props;
    const postsStatus = useSelector(selectPostsStatus);
    const cursor = useSelector(selectCursor);
    const limit = useSelector(selectLimit);
    const totalCount = useSelector(selectTotalCount);
    const sort = useSelector(selectSort);
    const filter = useSelector(selectFilter);
    const posts = useSelector(selectPosts);
    const [triggerUpdateRef, inView, setInView] = useIntersectionObserver();
    const postListController = usePostListController();

    useEffect(() => {
        if (postsStatus === 'init') {
            postListController.initPosts({ cursor, limit, sort });
            postListController.getPostsTotalCount();
        }

    }, [postsStatus]);

    useEffect(() => {
        if (postsStatus === 'reloading') {
            postListController.initPosts({ cursor, limit, sort });
        }

    }, [postsStatus]);

    useEffect(() => {
        if (inView && posts.length < totalCount) {
            setInView(false);
            postListController.updatePosts({ cursor, limit, sort });
        }

        if (inView && posts.length >= totalCount) {
            postListController.getPostsTotalCount();
        }

    }, [inView, posts, totalCount]);

    return (
        <div className={classNames(classes, 'post-list')}>
            <Navigation classes="post-list__nav nav">
                <LinkCustom classes="nav__link-btn btn" link={'/post-creator'}>
                    <Icon.Plus className="btn-icon" />
                </LinkCustom>
            </Navigation>
            <PostListSort classes='post-list__sort' />
            {postsStatus !== 'reloading' && posts && posts.length > 0 && posts.map((post, index) => {
                return <PostListItem classes="post-list__item" key={post._id} {...post} />;
            })}
            {postsStatus !== 'loaded' && <PostListItemSkeleton count={10} />}
            <span className="post-list__trigger-update" ref={triggerUpdateRef}></span>
        </div>
    );
};

export default PostList;
