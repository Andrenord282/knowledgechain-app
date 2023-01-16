import useClasses from 'hooks/useClasses';
import useDisplayPostContent from './hooks/useDisplayPostContent';

import Button from 'сomponents/Button';

import './PostContent.scss';

const PostContent = ({ classes, schemaPost }) => {
	const inheritClasses = useClasses(classes);
	const displayPostContent = useDisplayPostContent();

	return (
		<div className={inheritClasses + ' post-content'}>
			<div ref={displayPostContent.containerRef} className="post-content__container">
				<div ref={displayPostContent.bodyRef} className=" post-content__body">
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
				</div>
			</div>
			{displayPostContent.isTrimContainer && (
				<div className="post-content__nav">
					<Button
						classes="post-content__btn-visible"
						handleClick={displayPostContent.handlerAnimateContainer}>
						<span className="btn__text">Показать полностью</span>
					</Button>
				</div>
			)}
		</div>
	);
};

export default PostContent;
