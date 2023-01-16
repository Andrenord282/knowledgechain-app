import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { pushEndSchemaItem, pushMiddleSchemaItem } from '../../../model';

const usePushSchemaItem = (main, schemItemIndex) => {
	const dispatch = useDispatch();

	return () => {
		const schemaItem = {
			id: nanoid(5),
			type: 'text',
			value: '',
		};
		main
			? dispatch(pushEndSchemaItem({ schemaItem }))
			: dispatch(
					pushMiddleSchemaItem({ cursorInex: schemItemIndex, schemaItem }),
			  );
	};
};

export default usePushSchemaItem;
