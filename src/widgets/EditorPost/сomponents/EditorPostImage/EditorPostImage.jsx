//-----hooks-----//
import { useState, memo } from 'react';
import useClasses from 'hooks/useClasses';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectPostSchemaItem } from 'store/editorPostSchemaSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import EditorPostTools from '../EditorPostTools';

//-----style-----//
import './EditorPostImage.scss';

const EditorPostImage = (props) => {
	const { classes, schemaItemIndex, schemaLength, schemaItemIsLast } = props;
	const inheritClasses = useClasses(classes);
	const postSchemaItem = useSelector((state) => selectPostSchemaItem(state, schemaItemIndex));
	const [toggleTools, setToggleTools] = useState(false);

	const handlerToggleTools = () => {
		setToggleTools((prevToggleTools) => !prevToggleTools);
	};

	return (
		<div className={inheritClasses + ' editor-post-image'}>
			<div className="editor-post-image__wrapper-item">
				<img src={postSchemaItem.value} alt="" className="editor-post-image__item" />
			</div>
			{!schemaItemIsLast && (
				<Button classes="editor-post-image__btn-toggle" handleClick={handlerToggleTools}>
					{!toggleTools ? <Icon.Plus className="btn-icon" /> : <Icon.Minus className="btn-icon" />}
				</Button>
			)}
			{!schemaItemIsLast && toggleTools && (
				<EditorPostTools
					classes="editor-post-image__tools"
					schemaItemIndex={schemaItemIndex}
					schemaLength={schemaLength}
					schemaItemIsLast={schemaItemIsLast}
				/>
			)}
			{schemaItemIsLast && (
				<EditorPostTools
					classes="editor-post-image__tools"
					schemaItemIndex={schemaItemIndex}
					schemaLength={schemaLength}
					schemaItemIsLast={schemaItemIsLast}
				/>
			)}
		</div>
	);
};

export default memo(EditorPostImage);
