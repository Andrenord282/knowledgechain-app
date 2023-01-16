import useClasses from 'hooks/useClasses';
import useAutosizeTextArea from 'hooks/useAutosizeTextArea';
import { useRef } from 'react';

import './TextArea.scss';

const TextArea = ({
	classes,
	value,
	placeholder,
	handlerFocus,
	handlerBlur,
	handlerChange,
}) => {
	const inheritClasses = useClasses(classes);
	const nodeTextArea = useRef(null);
	useAutosizeTextArea(nodeTextArea.current, value);

	return (
		<textarea
			ref={nodeTextArea}
			className={inheritClasses + ' text-area'}
			value={value}
			placeholder={placeholder}
			onFocus={handlerFocus ? handlerFocus : null}
			onBlur={handlerBlur ? handlerBlur : null}
			onChange={handlerChange}
		/>
	);
};

export default TextArea;
