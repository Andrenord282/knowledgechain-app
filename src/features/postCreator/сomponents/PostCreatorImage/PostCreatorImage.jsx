import useClasses from 'hooks/useClasses';
import useToggle from 'hooks/useToggle';
import useDataUrl from './hooks/useDataUrl';

import PostCreatorOptions from '../PostCreatorOptions';
import Button from 'сomponents/_global/Button';
import * as Icon from 'сomponents/_global/Icon';
import './PostCreatorImage.scss';

const PostCreatorImage = (props) => {
	const { classes, schemItemIndex, id, moreText, last } = props;
	const inheritClasses = useClasses(classes);
	const [optionsToggle, setOptionsToggle] = useToggle(false);
	const dataUrl = useDataUrl(schemItemIndex);

	return (
		<div className={inheritClasses + ' post-creater-image'}>
			<img src={dataUrl} alt="" className="post-creater-image__img" />
			{!last && (
				<div className="post-creater-image__nav">
					{optionsToggle && (
						<PostCreatorOptions
							classes="post-creater-image__options"
							schemItemIndex={schemItemIndex}
							idSchemaItem={id}
						/>
					)}
					<Button
						classes="post-creater-img__btn-toggle"
						handleClick={setOptionsToggle}>
						{!optionsToggle && <Icon.Plus className="btn__icon" />}
						{optionsToggle && <Icon.Minus className="btn__icon" />}
					</Button>
				</div>
			)}
			{last && (
				<div className="post-creater-image__nav">
					<PostCreatorOptions
						classes="post-creater-image__options"
						schemItemIndex={schemItemIndex}
						idSchemaItem={id}
						moreText={moreText}
						main
					/>
				</div>
			)}
		</div>
	);
};

export default PostCreatorImage;
