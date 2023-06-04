//-----hooks-----//
import { memo } from 'react';
import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';

//-----controllers-----//
import { useEditorPostSchemaController } from 'hooks/editorPostSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

//-----style-----//
import './EditorPostTitle.scss';
import Render from 'сomponents/Render';

const EditorPostTitle = (props) => {
	const { classes, schemaItemIndex } = props;
	const inheritClasses = useClasses(classes);
	const titleInput = useInputChange('');
	const editorPostSchemaController = useEditorPostSchemaController();

	const handlerChangeTitle = (e) => {
		titleInput.onChenge(e);
		editorPostSchemaController.updateSchemaItem(schemaItemIndex, e.target.value);
	};

	const handlerResetTitle = () => {
		titleInput.onReset();
		editorPostSchemaController.updateSchemaItem(schemaItemIndex, '');
	};

	return (
		<Render name="EditorPostTitle">
			<div className={inheritClasses + ' editor-post-title'}>
				<input
					type="text"
					className="editor-post-title__input"
					placeholder="Напишите заголовок"
					value={titleInput.value}
					onChange={handlerChangeTitle}
				/>
				{/* {editorPostForm.showError && (
				<span className="editor-post-title__error-valid">
					{editorPostForm.errorValidListNewPost[schemaItemId]}
				</span>
			)} */}
				<Button classes="editor-post-title__btn-reset" handleClick={handlerResetTitle}>
					<Icon.ResetTest className="btn-icon" />
				</Button>
			</div>
		</Render>
	);
};

export default memo(EditorPostTitle);
