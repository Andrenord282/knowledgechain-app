//-----modules-----//
import classNames from "classnames";

//-----router-----//

//-----hooks-----//
import { useDayJs } from 'hooks/useDayJs';

//-----redux-----//

//-----widgets-----//

//-----components-----//
import Button from 'components/Button';
import * as Icon from 'components/Icon';

//-----style-----//
import './PostListItemHeader.scss';

const PostListItemHeader = (props) => {
    const { classes, authorName, createdAt, viewCounter, } = props;
    const createdDate = useDayJs(createdAt);

    return (
        <div className={classNames(classes, 'post-list-item-header')}>
            <div className="post-list-item-header__author">
                <span className="post-list-item-header__author-text">Автор:</span>
                <Button classes="post-list-item-header__author-btn">
                    <span className="btn-text">{authorName}</span>
                </Button>
            </div>
            <div className="post-list-item-header__created">
                <span className="post-list-item-header__created-value">Создан: {createdDate}</span>
            </div>
            <div className="post-list-item-header__view">
                <span className="post-list-item-header__view-value">{viewCounter}</span>
                <Icon.View className="post-list-item-header__view-icon" />
            </div>
        </div>
    );
};


export default PostListItemHeader;
