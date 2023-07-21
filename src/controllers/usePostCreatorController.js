//-----modules-----//
import { searchService } from 'services/axios/api/searchService';
import { postService } from 'services/axios/api/postService';
import { formService } from 'shared/formService';
import { ErrorService } from 'shared/errorService/errorService';

//-----hooks-----//
import { useNavigateLocation } from 'hooks/useNavigateLocation';

//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { postCreatorActions } from 'store/postCreatorSlice';

const usePostCreatorController = () => {
    const dispatch = useDispatch();
    const { setLocationPage } = useNavigateLocation();

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

    const topicSearch = async (topicName) => {
        try {
            const response = await searchService.search('topics', { topicName });

            if (response.status === 200) {
                return response.data;
            }

            throw new ErrorService(
                response.data.errorName,
                response.data.message,
                response.data.errorLogList,
            );
        } catch (error) {}
    };

    const addTopic = (topicName) => {
        dispatch(postCreatorActions.addTopic({ topicName }));
    };

    const deleteTopic = (topicIndex) => {
        dispatch(postCreatorActions.deleteTopic({ topicIndex }));
    };

    const submitPost = async (alert, params, schema, topics) => {
        try {
            alert.setToggleAlert(true);
            alert.setIconAlert('loading');
            alert.setTitleAlert('Отправка поста...');

            const post = formService.collectData({ params, schema, topics });
            const response = await postService.createPost(post);

            if (response.status === 200) {
                alert.setIconAlert('success');
                alert.setTitleAlert('Пост создан');
                setTimeout(() => {
                    alert.setToggleAlert(false);
                    alert.setIconAlert(null);
                    alert.setTitleAlert(null);
                    setLocationPage();
                    dispatch(postCreatorActions.resetState());
                }, 1000);
                return;
            }
            throw new ErrorService(response.data.errorName, response.data.message);
        } catch (error) {
            alert.setIconAlert('error');
            alert.setTitleAlert(error.message);

            setTimeout(() => {
                alert.setToggleAlert(false);
                alert.setIconAlert(null);
                alert.setTitleAlert(null);
            }, 1000000);
        }
    };

    const backMainPage = () => {
        dispatch(postCreatorActions.resetState());
    };

    return {
        initParams,
        updateSchemaItem,
        addSchemaItem,
        deleteSchemaItem,
        topicSearch,
        addTopic,
        deleteTopic,
        submitPost,
        backMainPage,
    };
};

export { usePostCreatorController };
