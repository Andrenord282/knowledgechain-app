//-----modules-----//
import classNames from "classnames";

//-----router-----//

//-----hooks-----//

//-----redux-----//

//-----widgets-----//

//-----components-----//

//-----style-----//
import './PostListItemContentImg.scss';

const PostListItemContentImg = (props) => {
    const { classes, img } = props;

    return (
        <img src={img} alt="" className={classNames(classes, 'post-list-item-content-img')} />
    );
};

export default PostListItemContentImg;
