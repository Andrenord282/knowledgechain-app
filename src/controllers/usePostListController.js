//-----modules-----//
import { postService } from 'services/axios/api/postService';
import { ErrorService } from 'shared/errorService/errorService';

//-----hooks-----//

//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { postListActions } from 'store/postListSlice';

const usePostListController = () => {
    const dispatch = useDispatch();

    const initPosts = async (query) => {
        try {
            const response = await postService.getPosts(query);

            if (response.status === 200) {
                const posts = response.data;

                setTimeout(() => {
                    dispatch(postListActions.setPostListStatus({ status: 'loaded' }));
                    dispatch(postListActions.initPosts({ posts }));
                }, 2000);
            }

            throw new ErrorService(
                response.data.errorName,
                response.data.message,
                response.data.errorLogList,
            );
        } catch (error) {}
    };

    const getPostsTotalCount = async () => {
        try {
            const response = await postService.getPostsTotalCount();

            if (response.status === 200) {
                const totalCount = response.data;

                dispatch(postListActions.setPostTotal({ totalCount }));
            }

            throw new ErrorService(
                response.data.errorName,
                response.data.message,
                response.data.errorLogList,
            );
        } catch (error) {}
    };

    const updatePosts = async (query) => {
        try {
            dispatch(postListActions.setPostListStatus({ status: 'updating' }));
            const response = await postService.getPosts(query);

            if (response.status === 200) {
                const posts = response.data;

                setTimeout(() => {
                    dispatch(postListActions.setPostListStatus({ status: 'loaded' }));
                    dispatch(postListActions.updatePosts({ posts }));
                }, 2000);
            }

            throw new ErrorService(
                response.data.errorName,
                response.data.message,
                response.data.errorLogList,
            );
        } catch (error) {}
    };

    const setSortValue = (variant) => {
        dispatch(postListActions.setSortValue({ ...variant }));
        dispatch(postListActions.setPostListStatus({ status: 'reloading' }));
    };

    const setSortOrder = () => {
        dispatch(postListActions.setSortOrder());
        dispatch(postListActions.setPostListStatus({ status: 'reloading' }));
    };

    return {
        initPosts,
        getPostsTotalCount,
        updatePosts,
        setSortValue,
        setSortOrder,
    };
};

export { usePostListController };
