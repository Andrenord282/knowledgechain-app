//-----modules-----//
import classNames from "classnames";

//-----router-----//

//-----hooks-----//

//-----redux-----//

//-----widgets-----//

//-----components-----//
import Button from "components/Button";
import * as Icon from "components/Icon";

//-----style-----//
import './PostListItemRating.scss';

const PostListItemRating = (props) => {
    const { classes, ratingCounter } = props;

    return (
        <div className={classNames(classes, 'post-list-item-rating')}>
            <Button classes='post-list-item-rating__btn'>
                <Icon.RatingUp className='btn-icon' />
            </Button>
            <span className="post-list-item-rating__value">{ratingCounter}</span>
            <Button classes='post-list-item-rating__btn'>
                <Icon.RatingDown className='btn-icon' />
            </Button>
        </div>
    );
};

export default PostListItemRating;
