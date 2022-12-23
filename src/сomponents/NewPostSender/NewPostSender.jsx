import useInheritClasses from 'hooks/useInheritClasses';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { removeAllScheme } from 'Redux/slices/newPostSlice';

import sendPost from 'services/postservice';

import Button from 'сomponents/Button/Button';

import classNames from 'classnames';
import 'сomponents/NewPostSender/NewPostSender.scss';

const NewPostSender = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	const dispatch = useDispatch();

	const [isActive, setIsActive] = useState(false);

	const newPost = useSelector((state) => state.newPost);
	const [{ value: title }, { value: content }] = useSelector(
		(state) => state.newPost.schemePost,
	);

	useEffect(() => {
		title.length >= 1 && content.length >= 1
			? setIsActive(true)
			: setIsActive(false);
	}, [title, content]);

	const setBtnClasses = classNames({
		'': isActive,
		inactive: !isActive,
	});

	const handlerSendNewPost = async () => {
		const sendRequest = await sendPost(newPost);

		if (sendRequest.status) {
			console.log(sendRequest.status);
			dispatch(removeAllScheme());
		}
	};

	return (
		<div className={setInheritClasses + ' scheme-sender'}>
			<Button
				inheritClasses={'scheme-sender__btn btn_default ' + setBtnClasses}
				handleClick={handlerSendNewPost}>
				<span className="btn__text">Создать</span>
			</Button>
		</div>
	);
};

export default NewPostSender;
