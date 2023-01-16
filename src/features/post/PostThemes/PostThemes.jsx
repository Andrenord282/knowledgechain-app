import useClasses from 'hooks/useClasses';

import './PostThemes.scss';

const PostThemes = (props) => {
	const { classes, themesPost } = props;
	const inheritClasses = useClasses(classes);

	return (
		<ul className={inheritClasses + ' post-themes'}>
			{themesPost.map((theme) => {
				return <li key={theme} className="post-themes__item">{theme}</li>;
			})}
		</ul>
	);
};

export default PostThemes;
