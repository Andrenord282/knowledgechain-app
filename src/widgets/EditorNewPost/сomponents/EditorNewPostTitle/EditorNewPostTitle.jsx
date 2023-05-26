//-----hooks-----//
import { useEffect } from 'react';
import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

//-----style-----//
import './EditorNewPostTitle.scss';
const EditorNewPostTitle = (props) => {
	const { classes, editorNewPostSlice, schemaItemIndex, schemaItemId } = props;
	const inheritClasses = useClasses(classes);
	const inputTitle = useInputChange('');

	useEffect(() => {
		if (editorNewPostSlice.postSchema[schemaItemIndex].value !== inputTitle.value) {
			editorNewPostSlice.setNewPostTitle({ value: inputTitle.value });
		}
	}, [inputTitle.value]);

	return (
		<div className={inheritClasses + ' editor-new-post-title'}>
			<input
				type="text"
				className="editor-new-post-title__input"
				placeholder="Напишите заголовок"
				name={inputTitle.name}
				value={inputTitle.value}
				onChange={(e) => {
					inputTitle.onChenge(e);
				}}
			/>
			{editorNewPostSlice.showError && (
				<span className="editor-new-post-title__error-valid">
					{editorNewPostSlice.errorValidListNewPost[schemaItemId]}
				</span>
			)}
			<Button
				classes="editor-new-post-title__btn-reset"
				handleClick={() => {
					inputTitle.onReset();
				}}>
				<Icon.ResetTest className="btn-icon" />
			</Button>
		</div>
	);
};

export default EditorNewPostTitle;
