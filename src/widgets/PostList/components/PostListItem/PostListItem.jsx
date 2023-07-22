//-----modules-----//
import classNames from "classnames";

//-----router-----//

//-----hooks-----//

//-----redux-----//

//-----widgets-----//

//-----components-----//
import PostListItemHeader from '../PostListItemHeader';
import PostListItemRating from '../PostListItemRating';
import PostListItemContent from '../PostListItemContent';
import PostListItemFooter from '../PostListItemFooter';

//-----style-----//
import './PostListItem.scss';

const PostListItem = (props) => {
    const { classes, authorName, createdAt, viewCounter, ratingCounter, schema, commentsCounter, topics } = props;


    return (
        <div className={classNames(classes, 'post-list-item')}>
            <PostListItemHeader classes="post-list-item__header"
                authorName={authorName}
                createdAt={createdAt}
                viewCounter={viewCounter} />
            <div className="post-list-item__body">
                <PostListItemRating classes="post-list-item__rating" ratingCounter={ratingCounter} />
                <PostListItemContent classes="post-list-item__content" schema={schema} />
            </div>
            <PostListItemFooter classes="post-list-item__footer" commentsCounter={commentsCounter} topics={topics} />
        </div>
    );
};

export default PostListItem;