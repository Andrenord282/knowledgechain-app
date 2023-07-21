//-----router-----//
import { useNavigate, useLocation } from 'react-router-dom';

const useNavigateLocation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location.state?.from || '/';

    const setLocationPage = (location) => {
        navigate(location ? location : fromPage, { replace: true, state: null });
    };

    return {
        location,
        setLocationPage,
    };
};

export { useNavigateLocation };
