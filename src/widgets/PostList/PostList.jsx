/* eslint-disable react-hooks/exhaustive-deps */
//-----modules-----//
import classNames from "classnames";

//-----router-----//

//-----hooks-----//

//-----controllers-----//
import { usePostListController } from "controllers";

//-----redux-----//
import { useSelector } from "react-redux";

//-----selectors-----//
import { selectCursor, selectFilter, selectLimit, selectPosts, selectPostsStatus, selectSort } from "store/postListSlice";

//-----components-----//
import Navigation from 'components/Navigation';
import LinkCustom from 'components/LinkCustom';
import * as Icon from 'components/Icon';
import PostListSort from "./components/PostListSort";
import PostListItem from './components/PostListItem';

//-----style-----//
import './PostList.scss';
import { useEffect } from "react";

const PostList = (props) => {
    const { classes } = props;
    const postsStatus = useSelector(selectPostsStatus);
    const cursor = useSelector(selectCursor);
    const limit = useSelector(selectLimit);
    const sort = useSelector(selectSort);
    const filter = useSelector(selectFilter);
    const posts = useSelector(selectPosts);

    const postListController = usePostListController();

    useEffect(() => {
        if (postsStatus === 'init' || postsStatus === 'reloading') {
            postListController.getPosts({ cursor, limit, sort });
        }

    }, [postsStatus]);


    return (
        <div className={classNames(classes, 'post-list')}>
            <Navigation classes="post-list__nav nav">
                <LinkCustom classes="nav__link-btn btn" link={'/post-creator'}>
                    <Icon.Plus className="btn-icon" />
                </LinkCustom>
            </Navigation>
            <PostListSort classes='post-list__sort' />
            {posts && posts.length > 0 && posts.map((post, index) => {
                return <PostListItem classes="post-list__item" key={post._id} {...post} />;
            })}
        </div>
    );
};

export default PostList;
