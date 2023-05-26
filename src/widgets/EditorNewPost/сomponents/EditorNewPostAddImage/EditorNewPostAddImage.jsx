//-----modules-----//
import formService from 'shared/formService';

//-----hooks-----//
import { useRef } from 'react';
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const EditorNewPostAddImage = (props) => {
	const { classes, editorNewPostSlice, schemaItemIndex, schemaLength } = props;
	const inheritClasses = useClasses(classes);
	const InputFileRef = useRef();

	const hanlderOpenInputFile = () => {
		InputFileRef.current.click();
	};

	const handleFileInputChange = (event) => {
		const file = event.target.files[0];
		const imageUrl = URL.createObjectURL(file);
		editorNewPostSlice.addNewSchemaItem(schemaItemIndex, schemaLength, imageUrl, 'image', file.name);
		formService.pushFile(file);
	};

	return (
		<>
			<Button
				classes={inheritClasses}
				handleClick={() => {
					hanlderOpenInputFile();
				}}>
				<Icon.AddImage className="btn-icon" />
			</Button>
			<input
				multiple
				ref={InputFileRef}
				type="file"
				id="EditorNewPostAddImage"
				className={inheritClasses + '-input'}
				onChange={() => {
					handleFileInputChange();
				}}
			/>
		</>
	);
};

export default EditorNewPostAddImage;
