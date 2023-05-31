//-----hooks-----//
import { useState, memo } from 'react';
import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';
import { useEditorPostSchemaController } from 'hooks/editorPostSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import TextAreaCustom from 'сomponents/TextAreaCustom';
import EditorPostTools from '../EditorPostTools';

//-----style-----//
import './EditorPostText.scss';
import Render from 'сomponents/Render';

const EditorPostText = memo((props) => {
	const { classes, schemaItemIndex, schemaItemId, schemaLength, schemaItemIsLast } = props;
	const inheritClasses = useClasses(classes);
	const editorPostSchemaController = useEditorPostSchemaController();
	const textInput = useInputChange('');
	const [toggleTools, setToggleTools] = useState(false);

	const handlerChangeText = (e) => {
		textInput.onChenge(e);
		editorPostSchemaController.updateSchemaItem(schemaItemId, textInput.value);
	};

	const handlerToggleTools = () => {
		setToggleTools((prevToggleTools) => !prevToggleTools);
	};

	return (
		<Render name="EditorPostText">
			<div className={inheritClasses + ' editor-post-text'}>
				<div className="editor-post-text__input-body">
					<TextAreaCustom
						classes="editor-post-text__input"
						value={textInput.value}
						onChange={handlerChangeText}
						placeholder="Напишите текст"
					/>
					{/* {editorPostForm.showError && (
					<span className="editor-post-text__error-valid">
						{editorPostForm.errorValidListNewPost[schemaItemId]}
					</span>
				)} */}
				</div>
				<Button classes="editor-post-text__btn-reset" handleClick={textInput.onReset}>
					<Icon.ResetTest className="btn-icon" />
				</Button>
				{!schemaItemIsLast && (
					<Button classes="editor-post-text__nav-btn-toggle" handleClick={handlerToggleTools}>
						{!toggleTools ? <Icon.Plus className="btn-icon" /> : <Icon.Minus className="btn-icon" />}
					</Button>
				)}
				{!schemaItemIsLast && (
					<div className="editor-post-text__nav">
						{toggleTools && (
							<EditorPostTools
								classes="editor-post-text__tools"
								schemaItemIndex={schemaItemIndex}
								schemaItemId={schemaItemId}
								schemaLength={schemaLength}
								schemaItemIsLast={schemaItemIsLast}
							/>
						)}
					</div>
				)}
				{schemaItemIsLast && (
					<div className="editor-post-text__nav">
						<EditorPostTools
							classes="editor-post-text__tools"
							schemaItemIndex={schemaItemIndex}
							schemaItemId={schemaItemId}
							schemaLength={schemaLength}
							schemaItemIsLast={schemaItemIsLast}
						/>
					</div>
				)}
			</div>
		</Render>
	);
});

export default EditorPostText;
