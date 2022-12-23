import useInheritClasses from 'hooks/useInheritClasses';

import { useSelector } from 'react-redux';

import NewPostSchemeTitle from 'сomponents/NewPostSchemeTitle/NewPostSchemeTitle';
import NewPostSchemeText from 'сomponents/NewPostSchemeText/NewPostSchemeText';
import NewPostSchemeImage from 'сomponents/NewPostSchemeImage/NewPostSchemeImage';
import NewPostSchemeOptions from 'сomponents/NewPostSchemeOptions/NewPostSchemeOptions';
import NewPostSender from 'сomponents/NewPostSender/NewPostSender';

import 'сomponents/NewPostScheme/NewPostScheme.scss';

const NewPostScheme = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);

	const { schemePost } = useSelector((state) => state.newPost);

	return (
		<div className={setInheritClasses + ' scheme-new-post'}>
			{schemePost.map((schemeItem, i) => {
				switch (true) {
					case schemeItem.type === 'title':
						return (
							<NewPostSchemeTitle
								key={schemeItem.id}
								inheritClasses="scheme-new-post__title"
								{...schemeItem}
							/>
						);

					case schemeItem.type === 'text' && i === schemePost.length - 1:
						return (
							<NewPostSchemeText
								key={schemeItem.id}
								indexSchemItem={i}
								inheritClasses="scheme-new-post__content"
								{...schemeItem}
								last
							/>
						);

					case schemeItem.type === 'text':
						return (
							<NewPostSchemeText
								key={schemeItem.id}
								indexSchemItem={i}
								inheritClasses="scheme-new-post__content"
								{...schemeItem}
							/>
						);
					case /image/.test(schemeItem.type) &&
						i === schemePost.length - 1:
						return (
							<NewPostSchemeImage
								key={schemeItem.id}
								indexSchemItem={i}
								inheritClasses="scheme-new-post__content"
								{...schemeItem}
								last
							/>
						);
					case /image/.test(schemeItem.type):
						return (
							<NewPostSchemeImage
								key={schemeItem.id}
								indexSchemItem={i}
								inheritClasses="scheme-new-post__content"
								{...schemeItem}
							/>
						);

					default:
						break;
				}
			})}
			<NewPostSchemeOptions
				inheritClasses="scheme-new-post__options scheme-new-post__options_main"
				main
				idSchemeItem={schemePost[schemePost.length - 1].id}
				moreText={schemePost.length > 2 ? true : false}
			/>
			<NewPostSender inheritClasses="scheme-new-post__sender"/>
		</div>
	);
};

export default NewPostScheme;
