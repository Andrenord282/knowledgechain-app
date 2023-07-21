//-----modules-----//
import classNames from "classnames";

//-----hooks-----//

//-----сomponents-----//
import PostCreatorAddText from '../PostCreatorAddText';
import PostCreatorDelete from '../PostCreatorDelete';
import PostCreatorAddImage from '../PostCreatorAddImage';

//-----style-----//
import './PostCreatorTools.scss';

const PostCreatorTools = (props) => {
    const { classes, schemaItemIndex, schemaLength } = props;

    return (
        <div className={classNames(classes, 'post-creator-tools')}>
            <PostCreatorAddText classes="post-creator-tools__tool-btn" schemaItemIndex={schemaItemIndex} />
            <PostCreatorAddImage classes="post-creator-tools__tool-btn" schemaItemIndex={schemaItemIndex} />
            {schemaLength > 2 && (
                <PostCreatorDelete classes="post-creator-tools__tool-btn" schemaItemIndex={schemaItemIndex} />
            )}
        </div>
    );
};

export default PostCreatorTools;
