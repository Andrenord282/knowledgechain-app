import { useSelector } from 'react-redux';

const useDataUrl = (schemItemIndex) => {
	const schemaPost = useSelector(
		(state) => state.postCreator.schemaPost[schemItemIndex].dataUrl,
	);
	return schemaPost;
};

export default useDataUrl;
