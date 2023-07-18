//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { postCreatorActions } from 'store/postCreatorSlice';

const usePostCreatorController = () => {
    const dispatch = useDispatch();

    const initParams = (userId, userName) => {
        dispatch(postCreatorActions.initParams({ userId, userName }));
    };

    const updateSchemaItem = (schemaItemIndex, data) => {
        dispatch(postCreatorActions.updateSchemaItem({ schemaItemIndex, data }));
    };

    const addSchemaItem = (activationIndex, data = '', type = 'text', idItem = false) => {
        dispatch(postCreatorActions.addSchemaItem({ activationIndex, data, type, idItem }));
    };

    const deleteSchemaItem = (schemaItemIndex) => {
        dispatch(postCreatorActions.deleteSchemaItem({ schemaItemIndex }));
    };

    return {
        initParams,
        updateSchemaItem,
        addSchemaItem,
        deleteSchemaItem,
    };
};

export { usePostCreatorController };
