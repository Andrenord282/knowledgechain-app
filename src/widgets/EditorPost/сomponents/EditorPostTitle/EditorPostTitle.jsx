//-----hooks-----//
import { memo, useEffect } from 'react';
import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';
import { useEditorPostSchemaController } from 'hooks/editorPostSlice';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectPostSchemaItem } from 'store/editorPostSchemaSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

//-----style-----//
import './EditorPostTitle.scss';
import Render from 'сomponents/Render';

const EditorPostTitle = (props) => {
	const { classes, schemaItemIndex, schemaItemId } = props;
	const inheritClasses = useClasses(classes);
	const editorPostSchemaController = useEditorPostSchemaController();
	const inputTitle = useInputChange('');

	useEffect(() => {
		editorPostSchemaController.updateSchemaItem(schemaItemId, inputTitle.value);
	}, [inputTitle.value]);

	return (
		<Render name="EditorPostTitle">
			<div className={inheritClasses + ' editor-post-title'}>
				<input
					type="text"
					className="editor-post-title__input"
					placeholder="Напишите заголовок"
					value={inputTitle.value}
					onChange={inputTitle.onChenge}
				/>
				{/* {editorPostForm.showError && (
				<span className="editor-post-title__error-valid">
					{editorPostForm.errorValidListNewPost[schemaItemId]}
				</span>
			)} */}
				<Button classes="editor-post-title__btn-reset" handleClick={inputTitle.onReset}>
					<Icon.ResetTest className="btn-icon" />
				</Button>
			</div>
		</Render>
	);
};

export default memo(EditorPostTitle);
