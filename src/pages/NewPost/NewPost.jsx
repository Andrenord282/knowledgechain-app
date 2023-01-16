import Navigation from 'сomponents/_global/Navigation/Navigation';
import LinkCustom from 'сomponents/_global/LinkCustom/LinkCustom';
import { ReactComponent as IconBack } from 'assets/img/svg/icon-back.svg';
import PostCreator from 'features/postCreator';
import './NewPost.scss';

const NewPost = () => {
	return (
		<section className="new-post">
			<div className="new-post__container container">
				<div className="new-post__content">
					<Navigation classes="new-post__nav">
						<LinkCustom classes="nav__link link_back" link={'/'}>
							<IconBack className="link__icon" />
						</LinkCustom>
					</Navigation>
					<PostCreator classes="new-post__creater" />
				</div>
			</div>
		</section>
	);
};

export default NewPost;
