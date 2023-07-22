//-----modules-----//
import classNames from "classnames";

//-----router-----//

//-----hooks-----//

//-----redux-----//

//-----widgets-----//

//-----components-----//

//-----style-----//
import './PostListItemContentText.scss';

const PostListItemContentText = (props) => {
    const { classes, text } = props;

    return (
        <p className={classNames(classes, 'post-list-item-content-text')}>
            {text}
        </p>
    );
};

export default PostListItemContentText;
