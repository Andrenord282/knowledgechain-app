import useCheckAuthUser from 'hooks/useCheckAuthUser';

import Navigation from 'сomponents/_global/Navigation/Navigation';
import SortPosts from 'widgets/sortPost';
import LinkCustom from 'сomponents/_global/LinkCustom/LinkCustom';
import FilterPosts from 'сomponents/FilterPosts/FilterPosts';
import PostList from 'widgets/postList';
import Auth from 'widgets/auth';
import * as Icon from 'сomponents/_global/Icon';
import './Main.scss';

const Main = () => {
	const checkAuth = useCheckAuthUser();

	return (
		<>
			<section className="main">
				<div className="main__container container">
					<div className="main__content">
						<Navigation classes="main__nav">
							<SortPosts classes="nav__sort" />
							<LinkCustom
								classes="nav__link link_new-post"
								link={'/new-post'}
								handleClick={checkAuth.handlerCheckAuth}>
								<Icon.Plus className="link__icon" />
							</LinkCustom>
							<FilterPosts classes="nav__filter" />
						</Navigation>
						<PostList classes="main__list" />
					</div>
				</div>
			</section>
			<Auth toggleAuth={checkAuth.toggleAuth} setToggleAuth={checkAuth.setToggleAuth} />
		</>
	);
};

export default Main;
