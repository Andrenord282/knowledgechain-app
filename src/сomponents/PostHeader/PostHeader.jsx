import useInheritClasses from 'hooks/useInheritClasses';


import 'сomponents/PostHeader/PostHeader.scss';
const PostHeader = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);

	return (
		<div className={setInheritClasses + ' post-header'}>
			<div className="post-header__author">автор: ИМЯ</div>
			<div className="post-header__date">ДАТА</div>
		</div>
	);
};

export default PostHeader;
