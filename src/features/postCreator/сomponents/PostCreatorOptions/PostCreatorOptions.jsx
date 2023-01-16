import useClasses from 'hooks/useClasses';
import usePushSchemaItem from './hooks/usePushSchemaItem';
import useRemoveSchemaItem from './hooks/useRemoveSchemaItem';

import Button from 'сomponents/_global/Button';
import * as Icon from 'сomponents/_global/Icon';
import PostCreatorFiler from '../PostCreatorFiler/PostCreatorFiler';
import './PostCreatorOptions.scss';

const PostCreatorOptions = (proops) => {
	const {
		classes,
		schemItemIndex,
		idSchemaItem,
		main = false,
		moreText = true,
	} = proops;
	const inheritClasses = useClasses(classes);
	const handlerPushSchemaItem = usePushSchemaItem(main, schemItemIndex);
	const handlerRemoveSchemaItem = useRemoveSchemaItem(idSchemaItem);

	return (
		<div className={inheritClasses + '  post-creater-option'}>
			<div className="post-creater-option__item">
				<Button
					classes="post-creater-option__btn"
					handleClick={handlerPushSchemaItem}>
					<Icon.AddText className="btn__icon" />
				</Button>
				<span>Текст</span>
			</div>
			<div className="post-creater-option__item">
				<PostCreatorFiler
					classes="post-creater-option__btn"
					id="post-creater-file"
					htmlFor="post-creater-file"
					main={main}
					schemItemIndex={schemItemIndex}
				/>
				<span>Картика</span>
			</div>
			{moreText && (
				<div className="post-creater-option__item">
					<Button
						classes="post-creater-option__btn"
						handleClick={handlerRemoveSchemaItem}>
						<Icon.Delete className="btn__icon" />
					</Button>
					<span>Удалить</span>
				</div>
			)}
		</div>
	);
};

export default PostCreatorOptions;
