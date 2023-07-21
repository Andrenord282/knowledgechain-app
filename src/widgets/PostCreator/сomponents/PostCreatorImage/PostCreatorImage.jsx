//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useState, memo } from 'react';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectSchemaItem } from "store/postCreatorSlice";

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import PostCreatorTools from '../PostCreatorTools';

//-----style-----//
import './PostCreatorImage.scss';

const PostCreatorImage = (props) => {
    const { classes, schemaItemIndex, schemaLength, schemaItemIsLast } = props;
    const schemaItem = useSelector((state) => selectSchemaItem(state, schemaItemIndex));
    const [toggleTools, setToggleTools] = useState(false);

    const handleToggleTools = () => {
        setToggleTools((prevToggleTools) => !prevToggleTools);
    };

    return (
        <div className={classNames(classes, 'post-creator-image')}>
            <div className="post-creator-image__wrapper-item">
                <img src={schemaItem.value} alt="" className="post-creator-image__item" />
            </div>
            {!schemaItemIsLast && (
                <Button classes="post-creator-image__toggle-btn" handleClick={handleToggleTools}>
                    {!toggleTools ? <Icon.Plus className="btn-icon" /> : <Icon.Minus className="btn-icon" />}
                </Button>
            )}
            {!schemaItemIsLast && toggleTools && (
                <PostCreatorTools
                    classes="post-creator-image__tools"
                    schemaItemIndex={schemaItemIndex}
                    schemaLength={schemaLength}
                    schemaItemIsLast={schemaItemIsLast}
                />
            )}
            {schemaItemIsLast && (
                <PostCreatorTools
                    classes="post-creator-image__tools"
                    schemaItemIndex={schemaItemIndex}
                    schemaLength={schemaLength}
                    schemaItemIsLast={schemaItemIsLast}
                />
            )}
        </div>
    );
};

export default memo(PostCreatorImage);
