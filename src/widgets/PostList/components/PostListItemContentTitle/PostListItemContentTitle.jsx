//-----modules-----//
import classNames from "classnames";

//-----router-----//

//-----hooks-----//

//-----redux-----//

//-----widgets-----//

//-----components-----//
import LinkCustom from 'components/LinkCustom';

//-----style-----//
import './PostListItemContentTitle.scss';

const PostListItemContentTitle = (props) => {
    const { classes, title } = props;

    return (
        <LinkCustom classes={classNames(classes, 'post-list-item-content-title-btn btn')}
            target="_blank"
            link={'/page-post'}>
            <h3 className="btn-title">{title}</h3>
        </LinkCustom>
    );
};

export default PostListItemContentTitle;
