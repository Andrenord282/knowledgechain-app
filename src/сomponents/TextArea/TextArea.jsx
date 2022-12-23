import useInheritClasses from 'hooks/useInheritClasses';
import useAutosizeTextArea from 'hooks/useAutosizeTextArea';
import { useRef } from 'react';

import 'сomponents/TextArea/TextArea.scss';

const TextArea = ({ inheritClasses, value, placeholder, handlerChange }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	const nodeTextArea = useRef(null);

	useAutosizeTextArea(nodeTextArea.current, value);

	return (
		<>
			<textarea
				ref={nodeTextArea}
				className={setInheritClasses + ' text-area'}
				value={value}
				placeholder={placeholder}
				onChange={(e) => handlerChange(e)}
			/>
		</>
	);
};

export default TextArea;
