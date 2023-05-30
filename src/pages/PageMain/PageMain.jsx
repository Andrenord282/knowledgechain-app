//-----widgets-----//
import PostList from 'widgets/PostList';

//-----сomponents-----//
import Navigation from 'сomponents/Navigation';
import LinkCustom from 'сomponents/LinkCustom';
import * as Icon from 'сomponents/Icon';

//-----style-----//
import './PageMain.scss';

const PageMain = () => {
	return (
		<section className="main">
			<div className="main__container">
				<div className="main__content">
					<Navigation classes="main__nav nav">
						<LinkCustom classes="nav__link" link={'/editor-post'}>
							<Icon.Plus className="nav__link-icon" />
						</LinkCustom>
					</Navigation>
					<PostList classes="main__post-list" />
				</div>
			</div>
		</section>
	);
};

export default PageMain;
