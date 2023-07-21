//-----modules-----//
import classNames from "classnames";

//-----router-----//

//-----hooks-----//

//-----redux-----//

//-----widgets-----//
import PostListItem from '../PostListItem';

//-----сomponents-----//

//-----style-----//
import './PostList.scss';

const PostList = (props) => {
    const { classes } = props;

    return (
        <div className={classNames(classes, 'post-list')}>
            <PostListItem classes="post-list__item" />;
        </div>
    );
};

export default PostList;
