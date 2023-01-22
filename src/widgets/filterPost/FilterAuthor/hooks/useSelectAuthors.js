import { useSelector } from 'react-redux';
import { selectFilterAuthors } from '../../model/selectors';

const useSelectAuthors = () => {
	const author = useSelector(selectFilterAuthors);

	return author;
};

export default useSelectAuthors;
