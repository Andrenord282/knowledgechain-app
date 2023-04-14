//-----widgets-----//
import EditorNewPost from 'widgets/EditorNewPost';

//-----сomponents-----//
import Navigation from 'сomponents/Navigation';
import LinkCustom from 'сomponents/LinkCustom';
import * as Icon from 'сomponents/Icon';

//-----style-----//
import './PageNewPost.scss';

const PageNewPost = () => {
	return (
		<section className="new-post">
			<div className="new-post__container">
				<div className="new-post__content">
					<Navigation classes="new-post__nav nav">
						<LinkCustom classes="nav__link" link={'/'}>
							<Icon.ArrowBack className="nav__link-icon" />
						</LinkCustom>
					</Navigation>
					<EditorNewPost classes="new-post__editor" />
				</div>
			</div>
		</section>
	);
};

export default PageNewPost;
