//-----modules-----//
import filesService from 'shared/filesService';
//-----router-----//
//-----hooks-----//
import { useRef } from 'react';
import useClasses from 'hooks/useClasses';
import useEditorNewPostSlice from 'hooks/slices/useEditorNewPostSlice';
//-----redux-----//
//-----widgets-----//
//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const EditorNewAddImage = (props) => {
	const { classes, schemaItemIndex, schemaLength } = props;
	const inheritClasses = useClasses(classes);
	const InputFileRef = useRef();
	const editorNewPostModel = useEditorNewPostSlice();

	const hanlderOpenInputFile = () => {
		InputFileRef.current.click();
	};

	const handleFileInputChange = (event) => {
		const file = event.target.files[0];
		filesService.pushFile(file);
		const imageUrl = URL.createObjectURL(file);
		editorNewPostModel.addNewSchemaItem(schemaItemIndex, schemaLength, imageUrl, 'image');
	};

	return (
		<>
			<Button classes={inheritClasses} handleClick={hanlderOpenInputFile}>
				<Icon.AddImage className="btn-icon" />
			</Button>
			<input
				multiple
				ref={InputFileRef}
				type="file"
				id="EditorNewAddImage"
				className={inheritClasses + '-input'}
				onChange={handleFileInputChange}
			/>
		</>
	);
};

export default EditorNewAddImage;
