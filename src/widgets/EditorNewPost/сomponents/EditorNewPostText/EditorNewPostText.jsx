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
	const { classes, editorNewPostSlice, schemaItemIndex, schemaItemId, schemaLength, schemaItemIsLast } = props;
	const inheritClasses = useClasses(classes);
	const inputText = useInputChange('');
	const [toggleTools, setToggleTools] = useState(false);

	useEffect(() => {
		if (editorNewPostSlice.postSchema[schemaItemIndex].value !== inputText.value) {
			editorNewPostSlice.setNewPostText({ index: schemaItemIndex, value: inputText.value });
		}
	}, [inputText.value]);

	return (
		<div className={inheritClasses + ' editor-new-post-text'}>
			<div className="editor-new-post-text__input-body">
				<TextAreaCustom
					classes="editor-new-post-text__input"
					value={inputText.value}
					handlerChange={() => {
						inputText.onChenge();
					}}
					placeholder="Напишите текст"
				/>
				{editorNewPostSlice.showError && (
					<span className="editor-new-post-text__error-valid">
						{editorNewPostSlice.errorValidListNewPost[schemaItemId]}
					</span>
				)}
			</div>
			<Button classes="editor-new-post-text__btn-reset" handleClick={inputText.onReset}>
				<Icon.ResetTest className="btn-icon" />
			</Button>
			{!schemaItemIsLast && (
				<Button
					classes="editor-new-post-text__nav-btn-toggle"
					handleClick={() => {
						setToggleTools((prevToggleTools) => !prevToggleTools);
					}}>
					{!toggleTools ? <Icon.Plus className="btn-icon" /> : <Icon.Minus className="btn-icon" />}
				</Button>
			)}
			{!schemaItemIsLast && (
				<div className="editor-new-post-text__nav">
					{toggleTools && (
						<EditorNewPostTools
							classes="editor-new-post-text__tools"
							editorNewPostSlice={editorNewPostSlice}
							schemaItemIndex={schemaItemIndex}
							schemaItemId={schemaItemId}
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
						editorNewPostSlice={editorNewPostSlice}
						schemaItemIndex={schemaItemIndex}
						schemaItemId={schemaItemId}
						schemaLength={schemaLength}
						schemaItemIsLast={schemaItemIsLast}
					/>
				</div>
			)}
		</div>
	);
};

export default EditorNewPostText;
