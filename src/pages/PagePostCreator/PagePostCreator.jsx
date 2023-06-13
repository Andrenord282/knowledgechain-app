//-----widgets-----//
import PostCreator from 'widgets/PostCreator';

//-----сomponents-----//
import Navigation from 'сomponents/Navigation';
import LinkCustom from 'сomponents/LinkCustom';
import * as Icon from 'сomponents/Icon';

//-----style-----//
import './PagePostCreator.scss';

const PagePostCreator = () => {
	return (
		<section className="page-post-creator">
			<div className="page-post-creator__container">
				<div className="page-post-creator__content">
					<Navigation classes="page-post-creator__nav nav">
						<LinkCustom classes="nav__link" link={'/'}>
							<Icon.ArrowBack className="nav__link-icon" />
						</LinkCustom>
					</Navigation>
					<PostCreator classes="page-post-creator__editor" />
				</div>
			</div>
		</section>
	);
};

export default PagePostCreator;
