import { useSelector } from 'react-redux';
import { selectSchemaPost } from '../model';

const useSchemaPost = () => {
	const schemaPost = useSelector(selectSchemaPost);

	return schemaPost;
};

export default useSchemaPost;
