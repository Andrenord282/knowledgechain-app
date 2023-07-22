//-----modules-----//
import classNames from "classnames";
//-----router-----//

//-----hooks-----//

//-----redux-----//

//-----widgets-----//

//-----components-----//
import LinkCustom from 'components/LinkCustom';
import Button from "components/Button";
import * as Icon from "components/Icon";

//-----style-----//
import './PostListItemFooter.scss';

const PostListItemFooter = (props) => {
    const { classes, commentsCounter, topics } = props;

    return (
        <div className={classNames(classes, 'post-list-item-footer')}>
            <div className="post-list-item-footer__topic-list">
                {topics && topics.length > 0 && topics.map((topic) => {
                    return (
                        <Button key={topic} classes='post-list-item-footer__topic-btn'>
                            <span className="btn-text">{topic}</span>
                        </Button>
                    );
                })}
            </div>
            <LinkCustom link={'/page-post'} classes='post-list-item-footer__comments-btn btn'>
                <Icon.Comments className="btn-icon" />
                <span className="btn-text">{commentsCounter}</span>
            </LinkCustom>
        </div>
    );
};

export default PostListItemFooter;
