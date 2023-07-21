//-----widgets-----//
import PostCreator from 'widgets/PostCreator';

//-----style-----//
import './PagePostCreator.scss';

const PagePostCreator = () => {
	return (
		<section className="page-post-creator">
			<div className="page-post-creator__container">
				<div className="page-post-creator__content">
					<PostCreator classes="page-post-creator__editor" />
				</div>
			</div>
		</section>
	);
};

export default PagePostCreator;
