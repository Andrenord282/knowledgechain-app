//-----hooks-----//
import { useState } from 'react';
import useClasses from 'hooks/useClasses';
import useEditorNewPostSlice from 'hooks/slices/useEditorNewPostSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import EditorNewPostTools from '../EditorNewPostTools';

//-----style-----//
import './EditorNewPostImage.scss';

const EditorNewPostImage = (props) => {
	const { classes, schemaItemImageUrl, schemaItemId, schemaItemIndex, schemaLength, schemaItemIsLast } = props;
	const inheritClasses = useClasses(classes);
	const [toggleTools, setToggleTools] = useState(false);
	const editorNewPostModel = useEditorNewPostSlice();

	const handlerToggleTools = () => {
		setToggleTools(!toggleTools);
	};

	const hamdlerDeleteSchemaItem = () => {
		editorNewPostModel.deletCurrentSchemaItem(schemaItemId);
	};

	return (
		<div className={inheritClasses + ' editor-new-post-image'}>
			<div className="editor-new-post-image__wrapper-item">
				<img src={schemaItemImageUrl} alt="" className="editor-new-post-image__item" />
				<Button classes="editor-new-post-iamge__btn-delete" handleClick={hamdlerDeleteSchemaItem}>
					<Icon.ResetTest className="btn-icon" />
				</Button>
			</div>
			{!schemaItemIsLast && (
				<Button classes="editor-new-post-image__nav-btn-toggle" handleClick={handlerToggleTools}>
					{!toggleTools ? <Icon.Plus className="btn-icon" /> : <Icon.Minus className="btn-icon" />}
				</Button>
			)}
			{!schemaItemIsLast && (
				<div className="editor-new-post-image__nav">
					{toggleTools && (
						<EditorNewPostTools
							classes="editor-new-post-image__tools"
							schemaItemId={schemaItemId}
							schemaItemIndex={schemaItemIndex}
							schemaLength={schemaLength}
							schemaItemIsLast={schemaItemIsLast}
						/>
					)}
				</div>
			)}
			{schemaItemIsLast && (
				<div className="editor-new-post-image__nav">
					<EditorNewPostTools
						classes="editor-new-post-image__tools"
						schemaItemId={schemaItemId}
						schemaItemIndex={schemaItemIndex}
						schemaLength={schemaLength}
						schemaItemIsLast={schemaItemIsLast}
					/>
				</div>
			)}
		</div>
	);
};

export default EditorNewPostImage;
