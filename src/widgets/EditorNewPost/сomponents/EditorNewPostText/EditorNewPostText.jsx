//-----hooks-----//
import { useState, useEffect } from 'react';
import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';
import useEditorNewPostSlice from 'hooks/slices/useEditorNewPostSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import TextAreaCustom from 'сomponents/TextAreaCustom';
import EditorNewPostTools from '../EditorNewPostTools';

//-----style-----//
import './EditorNewPostText.scss';

const EditorNewPostText = (props) => {
	const { classes, schemaItemId, showError, errorValidListNewPost, schemaItemIndex, schemaLength, schemaItemIsLast } =
		props;
	const inheritClasses = useClasses(classes);
	const textModel = useInputChange('');
	const [toggleTools, setToggleTools] = useState(false);
	const editorNewPostModel = useEditorNewPostSlice();
	
	useEffect(() => {
		editorNewPostModel.setNewPostText({ index: schemaItemIndex, value: textModel.value });
	}, [textModel.value]);

	const handlerToggleTools = () => {
		setToggleTools(!toggleTools);
	};

	return (
		<div className={inheritClasses + ' editor-new-post-text'}>
			<div className="editor-new-post-text__input-body">
				<TextAreaCustom
					classes="editor-new-post-text__input"
					value={textModel.value}
					handlerChange={textModel.onChenge}
					placeholder="Напишите текст"
				/>
				{showError && (
					<span className="editor-new-post-text__error-valid">{errorValidListNewPost[schemaItemId]}</span>
				)}
			</div>
			<Button classes="editor-new-post-text__btn-reset" handleClick={textModel.onReset}>
				<Icon.ResetTest className="btn-icon" />
			</Button>
			{!schemaItemIsLast && (
				<Button classes="editor-new-post-text__nav-btn-toggle" handleClick={handlerToggleTools}>
					{!toggleTools ? <Icon.Plus className="btn-icon" /> : <Icon.Minus className="btn-icon" />}
				</Button>
			)}
			{!schemaItemIsLast && (
				<div className="editor-new-post-text__nav">
					{toggleTools && (
						<EditorNewPostTools
							classes="editor-new-post-text__tools"
							schemaItemId={schemaItemId}
							schemaItemIndex={schemaItemIndex}
							schemaLength={schemaLength}
							schemaItemIsLast={schemaItemIsLast}
						/>
					)}
				</div>
			)}
			{schemaItemIsLast && (
				<div className="editor-new-post-text__nav">
					<EditorNewPostTools
						classes="editor-new-post-text__tools"
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

export default EditorNewPostText;
