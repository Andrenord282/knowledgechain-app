import { updateSchemaText } from '../../../model';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useUpdateSchemaText = (schemItemIndex, value) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateSchemaText({ schemItemIndex, value }));
	}, [value]);
};

export default useUpdateSchemaText;
