//-----modules-----//
import formService from 'shared/formService';

//-----hooks-----//
import { useRef } from 'react';
import useClasses from 'hooks/useClasses';

//-----controllers-----//
import { usePostCreatorSchemaController } from 'controllers';

//-----redux-----//
import { nanoid } from '@reduxjs/toolkit';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

const PostCreatorAddImage = (props) => {
	const { classes, schemaItemIndex } = props;
	const inheritClasses = useClasses(classes);
	const fileInputRef = useRef();
	const postCreatorSchemaController = usePostCreatorSchemaController();

	const hanlderOpenFileInput = () => {
		fileInputRef.current.click();
	};

	const handlerChangeFile = (event) => {
		const nameId = nanoid(5);
		const file = event.target.files[0];
		const imageUrl = URL.createObjectURL(file);
		postCreatorSchemaController.addSchemaItem(schemaItemIndex, imageUrl, 'image', nameId);
		formService.pushFile(nameId, file);
	};

	return (
		<>
			<Button classes={inheritClasses} handleClick={hanlderOpenFileInput}>
				<Icon.AddImage className="btn-icon" />
			</Button>
			<input
				multiple
				ref={fileInputRef}
				type="file"
				id="PostCreatorAddImage"
				className={inheritClasses + '-input'}
				onChange={handlerChangeFile}
			/>
		</>
	);
};

export default PostCreatorAddImage;
