import usePuschSchemaFile from './hooks/usePuschSchemaFile';

import { useRef } from 'react';

import InputFile from 'сomponents/_global/InputFile';
import * as Icon from 'сomponents/_global/Icon';

const PostCreatorFiler = (proops) => {
	const { classes, schemItemIndex, main = false, id, htmlFor } = proops;
	const handlerPushSchemaFile = usePuschSchemaFile(main, schemItemIndex);
	const refInputFile = useRef(null);

	return (
		<InputFile
			refValue={refInputFile}
			id={id}
			handlerOnChange={handlerPushSchemaFile}
			htmlFor={htmlFor}
			classes={classes}>
			<Icon.AddImg className="btn__icon" />
		</InputFile>
	);
};

export default PostCreatorFiler;
