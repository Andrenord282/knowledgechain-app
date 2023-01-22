import { useSelector } from 'react-redux';
import { selectFilterThemes } from '../../model/selectors';

const useSelectThemes = () => {
	const themes = useSelector(selectFilterThemes);

	return themes;
};

export default useSelectThemes;
