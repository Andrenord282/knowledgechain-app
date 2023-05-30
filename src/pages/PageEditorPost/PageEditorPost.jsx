//-----widgets-----//
import EditorPost from 'widgets/EditorPost';

//-----сomponents-----//
import Navigation from 'сomponents/Navigation';
import LinkCustom from 'сomponents/LinkCustom';
import * as Icon from 'сomponents/Icon';

//-----style-----//
import './PageEditorPost.scss';

const PageEditorPost = () => {
	return (
		<section className="page-editor-post">
			<div className="page-editor-post__container">
				<div className="page-editor-post__content">
					<Navigation classes="page-editor-post__nav nav">
						<LinkCustom classes="nav__link" link={'/'}>
							<Icon.ArrowBack className="nav__link-icon" />
						</LinkCustom>
					</Navigation>
					<EditorPost classes="page-editor-post__editor" />
				</div>
			</div>
		</section>
	);
};

export default PageEditorPost;
