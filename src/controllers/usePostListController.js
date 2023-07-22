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

    const getPosts = async (query) => {
        try {
            const response = await postService.getPosts(query);

            if (response.status === 200) {
                const posts = response.data;
                dispatch(postListActions.initPosts({ posts }));
            }

            throw new ErrorService(
                response.data.errorName,
                response.data.message,
                response.data.errorLogList,
            );
        } catch (error) {}
    };

    return {
        getPosts,
    };
};

export { usePostListController };
