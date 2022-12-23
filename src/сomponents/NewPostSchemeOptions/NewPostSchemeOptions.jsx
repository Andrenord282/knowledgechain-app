import { nanoid } from 'nanoid';

import useInheritClasses from 'hooks/useInheritClasses';

import { useDispatch } from 'react-redux';
import {
	pushMiddleSchemeItem,
	pushEndSchemeItem,
	removeSchemeItem,
} from 'Redux/slices/newPostSlice';

import Button from 'сomponents/Button/Button';
import { ReactComponent as IconAddText } from 'assets/img/svg/icon-add-text.svg';
import { ReactComponent as IconAddImg } from 'assets/img/svg/icon-add-img.svg';
import { ReactComponent as IconDelete } from 'assets/img/svg/icon-delete.svg';

import 'сomponents/NewPostSchemeOptions/NewPostSchemeOptions.scss';
import InputFile from 'сomponents/InputFile/InputFile';

const NewPostSchemeOptions = ({
	inheritClasses,
	indexSchemItem,
	idSchemeItem,
	main = false,
	moreText = true,
}) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	const dispatch = useDispatch();
	const handlerPushSchemeItem = () => {
		const schemeItem = {
			id: nanoid(5),
			type: 'text',
			value: '',
		};
		main
			? dispatch(pushEndSchemeItem({ schemeItem }))
			: dispatch(
					pushMiddleSchemeItem({ cursorInex: indexSchemItem, schemeItem }),
			  );
	};

	const handlerRemoveSchemeItem = () => {
		dispatch(removeSchemeItem({ idSchemeItem }));
	};

	return (
		<div className={setInheritClasses + ' scheme-options'}>
			<div className="scheme-options__item">
				<Button
					inheritClasses="scheme-options__btn btn_scheme-options"
					handleClick={handlerPushSchemeItem}>
					<IconAddText className="btn__icon" />
				</Button>
				<span>Текст</span>
			</div>
			<div className="scheme-options__item">
				<InputFile
					inheritClasses="scheme-options__btn btn_scheme-options"
					id="new-post-file"
					htmlFor="new-post-file"
					main={main}
					indexSchemItem={indexSchemItem}>
					<IconAddImg className="btn__icon" />
				</InputFile>
				<span>Картика</span>
			</div>
			{moreText && (
				<div className="scheme-options__item">
					<Button
						inheritClasses="scheme-options__btn btn_scheme-options"
						handleClick={handlerRemoveSchemeItem}>
						<IconDelete className="btn__icon" />
					</Button>
					<span>Удалить</span>
				</div>
			)}
		</div>
	);
};

export default NewPostSchemeOptions;
