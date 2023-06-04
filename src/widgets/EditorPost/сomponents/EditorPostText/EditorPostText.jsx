//-----hooks-----//
import { useState, memo } from 'react';
import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';

//-----controllers-----//
import { useEditorPostSchemaController } from 'hooks/editorPostSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import TextAreaCustom from 'сomponents/TextAreaCustom';
import EditorPostTools from '../EditorPostTools';

//-----style-----//
import './EditorPostText.scss';
import Render from 'сomponents/Render';

const EditorPostText = (props) => {
	const { classes, schemaItemIndex, schemaLength, schemaItemIsLast } = props;
	const inheritClasses = useClasses(classes);
	const textInput = useInputChange('');
	const [toggleTools, setToggleTools] = useState(false);
	const editorPostSchemaController = useEditorPostSchemaController();

	const handlerChangeText = (e) => {
		textInput.onChenge(e);
		editorPostSchemaController.updateSchemaItem(schemaItemIndex, e.target.value);
	};

	const handlerResetText = () => {
		textInput.onReset();
		editorPostSchemaController.updateSchemaItem(schemaItemIndex, '');
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
					<span className="editor-post-text__error">
						{editorPostForm.errorValidListNewPost[schemaItemId]}
					</span>
				)} */}
				</div>
				<Button classes="editor-post-text__btn-reset" handleClick={handlerResetText}>
					<Icon.ResetTest className="btn-icon" />
				</Button>
				{!schemaItemIsLast && (
					<Button classes="editor-post-text__btn-toggle" handleClick={handlerToggleTools}>
						{!toggleTools ? <Icon.Plus className="btn-icon" /> : <Icon.Minus className="btn-icon" />}
					</Button>
				)}
				{!schemaItemIsLast && toggleTools && (
					<EditorPostTools
						classes="editor-post-text__tools"
						schemaItemIndex={schemaItemIndex}
						schemaLength={schemaLength}
						schemaItemIsLast={schemaItemIsLast}
					/>
				)}
				{schemaItemIsLast && (
					<EditorPostTools
						classes="editor-post-text__tools"
						schemaItemIndex={schemaItemIndex}
						schemaLength={schemaLength}
						schemaItemIsLast={schemaItemIsLast}
					/>
				)}
			</div>
		</Render>
	);
};

export default memo(EditorPostText);
