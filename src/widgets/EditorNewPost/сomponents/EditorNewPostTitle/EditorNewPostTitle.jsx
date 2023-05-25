//-----hooks-----//
import { useEffect } from 'react';
import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';
import useEditorNewPostSlice from 'hooks/slices/useEditorNewPostSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

//-----style-----//
import './EditorNewPostTitle.scss';

const EditorNewPostTitle = (props) => {
	const { classes, showError, schemaItemId, errorValidListNewPost } = props;
	const inheritClasses = useClasses(classes);
	const titleModel = useInputChange('');
	const editorNewPostModel = useEditorNewPostSlice();

	useEffect(() => {
		editorNewPostModel.setNewPostTitle({ value: titleModel.value });
	}, [titleModel.value]);

	return (
		<div className={inheritClasses + ' editor-new-post-title'}>
			<input
				type="text"
				className="editor-new-post-title__input"
				placeholder="Напишите заголовок"
				name={titleModel.name}
				value={titleModel.value}
				onChange={titleModel.onChenge}
			/>
			{showError && (
				<span className="editor-new-post-title__error-valid">{errorValidListNewPost[schemaItemId]}</span>
			)}
			<Button classes="editor-new-post-title__btn-reset" handleClick={titleModel.onReset}>
				<Icon.ResetTest className="btn-icon" />
			</Button>
		</div>
	);
};

export default EditorNewPostTitle;
