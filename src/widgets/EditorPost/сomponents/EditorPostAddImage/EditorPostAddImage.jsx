//-----modules-----//
import formService from 'shared/formService';

//-----hooks-----//
import { useRef } from 'react';
import useClasses from 'hooks/useClasses';

//-----controllers-----//
import { useEditorPostSchemaController } from 'hooks/editorPostSlice';

//-----redux-----//
import { nanoid } from '@reduxjs/toolkit';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const EditorPostAddImage = (props) => {
	const { classes, schemaItemIndex } = props;
	const inheritClasses = useClasses(classes);
	const fileInputRed = useRef();
	const editorPostSchemaController = useEditorPostSchemaController();

	const hanlderOpenFileInput = () => {
		fileInputRed.current.click();
	};

	const handlerChangeFile = (event) => {
		const nameId = nanoid(5);
		const file = event.target.files[0];
		const imageUrl = URL.createObjectURL(file);
		editorPostSchemaController.addSchemaItem(schemaItemIndex, imageUrl, 'image', nameId);
		formService.pushFile(nameId, file);
	};

	return (
		<>
			<Button classes={inheritClasses} handleClick={hanlderOpenFileInput}>
				<Icon.AddImage className="btn-icon" />
			</Button>
			<input
				multiple
				ref={fileInputRed}
				type="file"
				id="EditorPostAddImage"
				className={inheritClasses + '-input'}
				onChange={handlerChangeFile}
			/>
		</>
	);
};

export default EditorPostAddImage;
