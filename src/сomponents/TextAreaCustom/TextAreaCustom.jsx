//-----hooks-----//
import { useRef } from 'react';
import useClasses from 'hooks/useClasses';
import useAutosizeTextArea from './hooks/useAutosizeTextArea';

//-----style-----//
import './TextAreaCustom.scss';

const TextAreaCustom = (props) => {
	const { classes, value, onChange, placeholder, handlerFocus, handlerBlur } = props;
	const inheritClasses = useClasses(classes);
	const textAreaRef = useRef(null);
	useAutosizeTextArea(textAreaRef.current, value);

	return (
		<textarea
			ref={textAreaRef}
			className={`${inheritClasses} text-area-custom`}
			value={value}
			placeholder={placeholder}
			onFocus={handlerFocus ? handlerFocus : null}
			onBlur={handlerBlur ? handlerBlur : null}
			onChange={onChange}
		/>
	);
};

export default TextAreaCustom;
