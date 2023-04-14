//-----hooks-----//
import { useRef } from 'react';
import useClasses from 'hooks/useClasses';
import useAutosizeTextArea from 'hooks/useAutosizeTextArea';

//-----style-----//
import './TextAreaCustom.scss';

const TextAreaCustom = (props) => {
	const { classes, value, handlerChange, placeholder, handlerFocus, handlerBlur } = props;
	const inheritClasses = useClasses(classes);
	const nodeTextArea = useRef(null);
	useAutosizeTextArea(nodeTextArea.current, value);

	return (
		<textarea
			ref={nodeTextArea}
			className={inheritClasses + ' text-area-custom'}
			value={value}
			placeholder={placeholder}
			onFocus={handlerFocus ? handlerFocus : null}
			onBlur={handlerBlur ? handlerBlur : null}
			onChange={handlerChange}
		/>
	);
};

export default TextAreaCustom;
