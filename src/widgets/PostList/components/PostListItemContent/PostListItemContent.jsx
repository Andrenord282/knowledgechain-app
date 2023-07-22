//-----modules-----//
import classNames from "classnames";

//-----router-----//

//-----hooks-----//

//-----redux-----//

//-----widgets-----//

//-----components-----//
import PostListItemContentTitle from '../PostListItemContentTitle';
import PostListItemContentText from "../PostListItemContentText";
import PostListItemContentImg from "../PostListItemContentImg";

//-----style-----//
import './PostListItemContent.scss';

const PostListItemContent = (props) => {
    const { classes, schema } = props;

    return (
        <div className={classNames(classes, 'post-list-item-content')}>
            {schema.map((schemaItem) => {
                switch (true) {
                    case schemaItem.type === 'title':
                        return (
                            <PostListItemContentTitle
                                classes="post-list-item-content__title"
                                key={schemaItem.id}
                                title={schemaItem.value}
                            />
                        );
                    case schemaItem.type === 'text':
                        return (
                            <PostListItemContentText
                                classes="post-list-item-content__text"
                                key={schemaItem.id}
                                text={schemaItem.value}
                            />
                        );
                    case schemaItem.type === 'image':
                        return (
                            <PostListItemContentImg
                                classes="post-list-item-content__img"
                                key={schemaItem.id}
                                img={schemaItem.value}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default PostListItemContent;
