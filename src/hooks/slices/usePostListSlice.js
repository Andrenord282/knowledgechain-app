//-----modules-----//
import postService from 'services/axios/api/postService';

//-----hooks-----//
//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import {
	selectPostListLoaded,
	selectCursorPost,
	selectPostLimit,
	selectSortPost,
	selectFilterPost,
	selectPostList,
} from '../../store/slices/postListSlice';

//-----actions-----//
import { togglePostListLoaded, updatePostList, setCursorPost } from '../../store/slices/postListSlice';

const usePostListSlice = () => {
	const dispatch = useDispatch();
	const postListLoaded = useSelector(selectPostListLoaded);
	const cursorPost = useSelector(selectCursorPost);
	const postLimit = useSelector(selectPostLimit);
	const sortPost = useSelector(selectSortPost);
	const filterPost = useSelector(selectFilterPost);
	const postList = useSelector(selectPostList);

	const requestPostList = async () => {
		const response = await postService.getPosts({ cursorPost, postLimit, sortPost, filterPost });

		if (response.status === 200) {
			dispatch(togglePostListLoaded({ toggle: true }));
			dispatch(updatePostList({ postList: response.data }));
			dispatch(setCursorPost({ option: 'upCursorPost' }));
		}
	};

	return { postListLoaded, requestPostList, postList };
};

export default usePostListSlice;
