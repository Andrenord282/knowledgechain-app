import useInheritClasses from 'hooks/useInheritClasses';

import Post from 'сomponents/Post/Post';

import 'сomponents/MainList/MainList.scss';

const MainList = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);

	return (
		<ul className={setInheritClasses + ' main-list'}>
			<Post inheritClasses="main-list__item" />
			<Post inheritClasses="main-list__item" />
			<Post inheritClasses="main-list__item" />
			<Post inheritClasses="main-list__item" />
		</ul>
	);
};

export default MainList;
