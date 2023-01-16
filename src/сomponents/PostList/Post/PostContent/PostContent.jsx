import useClasses from 'hooks/useClasses';

import Button from 'сomponents/_global/Button';
import './PostContent.scss';

const PostContent = ({ classes, schemaPost }) => {
	const inheritClasses = useClasses(classes);
	return (
		<div className={inheritClasses + ' post-content'}>
			{schemaPost.map((schemaItem) => {
				switch (true) {
					case schemaItem.type === 'title':
						return (
							<h3 key={schemaItem.id} className="post-content__title">
								{schemaItem.value}
							</h3>
						);
					case schemaItem.type === 'text':
						return (
							<p key={schemaItem.id} className="post-content__text">
								{schemaItem.value}
							</p>
						);

					// case /image/.test(schemaItem.type):
					// 	return (
					// 		<img
					// 			key={schemaItem.id}
					// 			className="post-content__img"
					// 			src={schemaItem.value}
					// 		/>
					// 	);
					default:
						break;
				}
			})}
			<Button classes="post-content__btn-set-visible-content btn_set-visible-content">
				<span className="btn__text">Показать полностью</span>
			</Button>
		</div>
	);
};

export default PostContent;
