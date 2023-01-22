import { useSelector } from 'react-redux';
import { selectThemesPost } from '../../../model/selectors';

const useThemes = () => {
	const themes = useSelector(selectThemesPost);

	return themes;
};

export default useThemes;
