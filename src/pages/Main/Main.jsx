
import SortPosts from 'сomponents/SortPosts/SortPosts';
import LinkCustom from 'сomponents/_global/LinkCustom/LinkCustom';
import Navigation from 'сomponents/_global/Navigation/Navigation';
import { ReactComponent as IconPlus } from 'assets/img/svg/icon-plus.svg';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/selectors';
import {
	optionsSelector,
	setLoadedPost,
} from 'store/slices/optionsPostListSlice/optionsPostListSlice';
import { postListSelector, pushPostList } from 'store/slices/postList/postList';
import postsService from 'services/postsService';

import FilterPosts from 'сomponents/FilterPosts/FilterPosts';
import PostList from 'сomponents/PostList/PostList';
import './Main.scss';

const Main = () => {
	const dispatch = useDispatch();
	const { isAuthUser } = useSelector(selectUser);
	const { isLoadedPost, ...optionsPostList } = useSelector(optionsSelector);
	const posts = useSelector(postListSelector);
	useEffect(() => {
		const handlerGetPostList = async () => {
			const response = await postsService.getPosts(optionsPostList);
			if (response.status === 200) {
				dispatch(pushPostList({ posts: response.data }));
				dispatch(setLoadedPost({ status: true }));
			}
		};
		if (!isLoadedPost) {
			handlerGetPostList();
		}
	}, [isLoadedPost, optionsPostList, dispatch]);

	const handlerCheckAuth = (e) => {
		// if (!isAuthUser) {
		// 	e.preventDefault();
		// 	dispatch(setType('SignIn'));
		// 	dispatch(toggleVisible());
		// }
	};

	return (
		<section className="main">
			<div className="main__container container">
				<div className="main__content">
					<Navigation classes="main__nav">
						<SortPosts classes="nav__sort" />
						<LinkCustom
							classes="nav__link link_new-post"
							link={'/new-post'}
							handleClick={handlerCheckAuth}>
							<IconPlus className="link__icon" />
						</LinkCustom>
						<FilterPosts classes="nav__filter" />
					</Navigation>
					{isLoadedPost && (
						<PostList classes="main__list" postList={posts} />
					)}
					{!isLoadedPost && <div className="main__list">загрузка</div>}
				</div>
			</div>
		</section>
	);
};

export default Main;
