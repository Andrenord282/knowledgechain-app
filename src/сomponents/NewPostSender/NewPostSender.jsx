import useInheritClasses from 'hooks/useInheritClasses';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { removeAllScheme } from 'Redux/slices/newPostSlice';

import postsService from 'services/postsService';
import filesService from 'services/filesService';

import Button from 'сomponents/Button/Button';

import classNames from 'classnames';
import 'сomponents/NewPostSender/NewPostSender.scss';

const NewPostSender = ({ inheritClasses }) => {
	const formData = new FormData();
	const setInheritClasses = useInheritClasses(inheritClasses);
	const dispatch = useDispatch();
	const [isActive, setIsActive] = useState(false);
	const post = useSelector((state) => state.newPost);
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

	const collectData = (data) => {
		const dataScheme = data.schemePost.map((dataItem) => {
			const { id, name, type, value, file } = dataItem;
			if (file !== undefined) {
				const fileName = file.name.replace(/.+?\./, `${id}.`);
				formData.set(id, file, fileName);
				return { id, name, type, value };
			} else {
				return dataItem;
			}
		});

		console.log(formData.entries().next().done);

		if (!formData.entries().next().done) {
			formData.set('postName', post.postName);
		}
		return {
			...data,
			schemePost: [...dataScheme],
		};
	};

	const handlerSendNewPost = async () => {
		const readyPost = collectData(post);
		const responsePost = await postsService.createNewPost(readyPost);
		const responseFiles = await filesService.uploadsFiles(formData);
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
