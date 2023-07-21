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

//-----widgets-----//
import PostListItem from '../PostListItem';

//-----сomponents-----//
import Navigation from 'сomponents/Navigation';
import LinkCustom from 'сomponents/LinkCustom';
import * as Icon from 'сomponents/Icon';

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
        if (postsStatus === 'init') {
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
            {/* <PostListItem classes="post-list__item" /> */}
        </div>
    );
};

export default PostList;
