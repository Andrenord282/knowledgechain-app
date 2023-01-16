import { useSelector } from 'react-redux';
import { selectSchemaPost } from 'features/postCreator/model';

const usePostCreatorIsReady = () => {
	const schemaPost = useSelector(selectSchemaPost);

	const isReadySchemaPost = () => {
		const schemaItems = schemaPost.length;
		let schemaReady = 0;

		schemaPost.forEach((item) => {
			if (item.value.length > 0) {
				schemaReady++;
			}
		});
		return schemaItems === schemaReady ? true : false;
	};

	return isReadySchemaPost();
};
export default usePostCreatorIsReady;
