import useInheritClasses from 'hooks/useInheritClasses';

import 'сomponents/PostThemes/PostThemes.scss';

const PostThemes = ({inheritClasses}) => {
	const setInheritClasses = useInheritClasses(inheritClasses);

	return (
		<ul className={setInheritClasses + " post-themes"}>
			<li className="post-themes__item">setInheritClasses</li>
			<li className="post-themes__item">setInheritClasses</li>
			<li className="post-themes__item">Classes</li>
			<li className="post-themes__item">setClasses</li>
			<li className="post-themes__item">setInheritClasses</li>
			<li className="post-themes__item">setInheritClasses</li>
			<li className="post-themes__item">set</li>
			<li className="post-themes__item">Inherit</li>
			<li className="post-themes__item">setInheritClasses</li>
			<li className="post-themes__item">setInheritClasses</li>
			<li className="post-themes__item">setInheritClasses</li>
			<li className="post-themes__item">se3t</li>
			<li className="post-themes__item">Inherit</li>
			<li className="post-themes__item">setInheritClasses</li>
			<li className="post-themes__item">setInheritClasses</li>
			<li className="post-themes__item">setInheritClasses</li>
		</ul>
	);
};

export default PostThemes;
