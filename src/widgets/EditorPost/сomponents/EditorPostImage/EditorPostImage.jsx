//-----hooks-----//
import { useState } from 'react';
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import EditorPostTools from '../EditorPostTools';

//-----style-----//
import './EditorPostImage.scss';

const EditorPostImage = (props) => {
	const {
		classes,
		editorPostSlice,
		schemaItemImageUrl,
		schemaItemId,
		schemaItemIndex,
		schemaLength,
		schemaItemIsLast,
	} = props;
	const inheritClasses = useClasses(classes);
	const [toggleTools, setToggleTools] = useState(false);

	return (
		<div className={inheritClasses + ' editor-post-image'}>
			<div className="editor-post-image__wrapper-item">
				<img src={schemaItemImageUrl} alt="" className="editor-post-image__item" />
				<Button
					classes="editor-new-post-iamge__btn-delete"
					handleClick={() => {
						editorPostSlice.deleteCurrentSchemaItem(schemaItemId);
					}}>
					<Icon.ResetTest className="btn-icon" />
				</Button>
			</div>
			{!schemaItemIsLast && (
				<Button
					classes="editor-post-image__nav-btn-toggle"
					handleClick={() => {
						setToggleTools((prevToggleTools) => !prevToggleTools);
					}}>
					{!toggleTools ? <Icon.Plus className="btn-icon" /> : <Icon.Minus className="btn-icon" />}
				</Button>
			)}
			{!schemaItemIsLast && (
				<div className="editor-post-image__nav">
					{toggleTools && (
						<EditorPostTools
							classes="editor-post-image__tools"
							schemaItemId={schemaItemId}
							schemaItemIndex={schemaItemIndex}
							schemaLength={schemaLength}
							schemaItemIsLast={schemaItemIsLast}
						/>
					)}
				</div>
			)}
			{schemaItemIsLast && (
				<div className="editor-post-image__nav">
					<EditorPostTools
						classes="editor-post-image__tools"
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

export default EditorPostImage;
