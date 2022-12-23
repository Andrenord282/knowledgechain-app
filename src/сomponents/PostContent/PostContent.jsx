import useInheritClasses from 'hooks/useInheritClasses';

import Button from 'сomponents/Button/Button';

import 'сomponents/PostContent/PostContent.scss';

const PostContent = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	return (
		<div className={setInheritClasses + ' post-content'}>
			<h3 className="post-content__title">Заголовок</h3>
			<p className="post-content__text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam
				dolorum animi, nostrum veniam quia! Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Fuga ipsam dolorum animi, nostrum
				veniam quia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Fuga ipsam dolorum animi, nostrum veniam quia! Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Fuga ipsam dolorum animi, nostrum
				veniam quia!
			</p>
			<img className="post-content__img" src="https://clck.ru/334oB4" />
			<p className="post-content__text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam
				dolorum animi, nostrum veniam quia! Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Fuga ipsam dolorum animi, nostrum
				veniam quia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Fuga ipsam dolorum animi, nostrum veniam quia! Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Fuga ipsam dolorum animi, nostrum
				veniam quia!
			</p>
			<img className="post-content__img" src="https://clck.ru/334o9Z" />
			<p className="post-content__text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam
				dolorum animi, nostrum veniam quia! Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Fuga ipsam dolorum animi, nostrum
				veniam quia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Fuga ipsam dolorum animi, nostrum veniam quia! Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Fuga ipsam dolorum animi, nostrum
				veniam quia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Fuga ipsam dolorum animi, nostrum veniam quia! Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Fuga ipsam dolorum animi, nostrum
				veniam quia!
			</p>
			<Button inheritClasses="post-content__btn-set-visible-content btn_set-visible-content">
				<span className="btn__text">Показать полностью</span>
			</Button>
		</div>
	);
};

export default PostContent;
