import useClasses from 'hooks/useClasses';

import './PostThemes.scss';

const PostThemes = ({classes}) => {
	const inheritClasses = useClasses(classes);

	return (
		<ul className={inheritClasses + " post-themes"}>
			<li className="post-themes__item">inheritClasses</li>
			<li className="post-themes__item">inheritClasses</li>
			<li className="post-themes__item">classes</li>
			<li className="post-themes__item">inheritClasses</li>
			<li className="post-themes__item">inheritClasses</li>
			<li className="post-themes__item">inheritClasses</li>
			<li className="post-themes__item">set</li>
			<li className="post-themes__item">Inherit</li>
			<li className="post-themes__item">inheritClasses</li>
			<li className="post-themes__item">inheritClasses</li>
			<li className="post-themes__item">inheritClasses</li>
			<li className="post-themes__item">se3t</li>
			<li className="post-themes__item">Inherit</li>
			<li className="post-themes__item">inheritClasses</li>
			<li className="post-themes__item">inheritClasses</li>
			<li className="post-themes__item">inheritClasses</li>
		</ul>
	);
};

export default PostThemes;
