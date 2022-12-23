import LinkCustom from 'сomponents/LinkCustom/LinkCustom';
import Navigation from 'сomponents/Navigation/Navigation';
import { ReactComponent as IconBack } from 'assets/img/svg/icon-back.svg';

import 'сomponents/NewPost/NewPost.scss';
import NewPostCreator from 'сomponents/NewPostCreator/NewPostCreator';

const NewPost = () => {
	return (
		<section className="new-post">
			<div className="new-post__container container">
				<div className="new-post__content">
					<Navigation inheritClasses="new-post__nav">
						<LinkCustom inheritClasses="nav__link link_back" link={'/'}>
							<IconBack className="link__icon" />
						</LinkCustom>
					</Navigation>
					<NewPostCreator inheritClasses="new-post__creater" />
				</div>
			</div>
		</section>
	);
};

export default NewPost;
