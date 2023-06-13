//-----hooks-----//
import { useState, memo } from 'react';
import useClasses from 'hooks/useClasses';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectPostSchemaItem } from 'store/postCreatorSchemaSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import PostCreatorTools from '../PostCreatorTools';

//-----style-----//
import './PostCreatorImage.scss';

const PostCreatorImage = (props) => {
	const { classes, schemaItemIndex, schemaLength, schemaItemIsLast } = props;
	const inheritClasses = useClasses(classes);
	const postSchemaItem = useSelector((state) => selectPostSchemaItem(state, schemaItemIndex));
	const [toggleTools, setToggleTools] = useState(false);

	const handlerToggleTools = () => {
		setToggleTools((prevToggleTools) => !prevToggleTools);
	};

	return (
		<div className={inheritClasses + ' post-creator-image'}>
			<div className="post-creator-image__wrapper-item">
				<img src={postSchemaItem.value} alt="" className="post-creator-image__item" />
			</div>
			{!schemaItemIsLast && (
				<Button classes="post-creator-image__btn-toggle" handleClick={handlerToggleTools}>
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
