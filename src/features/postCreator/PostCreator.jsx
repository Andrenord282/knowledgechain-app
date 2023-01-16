import useClasses from 'hooks/useClasses';
import usePostCreatorParams from './hooks/usePostCreatorParams';
import useSchemaPost from './hooks/useSchemaPost';

import PostCreatorText from './сomponents/PostCreatorText';
import PostCreatorImage from './сomponents/PostCreatorImage';
import PostCreatorThemes from './сomponents/PostCreatorThemes';
import PostCreatorSender from './сomponents/PostCreatorSender';
import './PostCreator.scss';

const PostCreator = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const schemaPost = useSchemaPost();
	usePostCreatorParams();

	return (
		<div className={inheritClasses + ' post-creater'}>
			{schemaPost.map((schemaItem, index) => {
				switch (true) {
					case schemaItem.type === 'title':
						return (
							<PostCreatorText
								classes="post-creater__title"
								key={schemaItem.id}
								schemItemIndex={index}
								variant="title"
								placeholder="Напишите заголовок"
								{...schemaItem}
							/>
						);
					case schemaItem.type === 'text' &&
						index === schemaPost.length - 1:
						return (
							<PostCreatorText
								classes="post-creater__content"
								key={schemaItem.id}
								schemItemIndex={index}
								variant="content"
								placeholder="Напишите текст"
								moreText={schemaPost.length > 2 ? true : false}
								{...schemaItem}
								last
							/>
						);

					case schemaItem.type === 'text':
						return (
							<PostCreatorText
								classes="post-creater__content"
								key={schemaItem.id}
								schemItemIndex={index}
								variant="content"
								placeholder="Напишите текст"
								moreText={schemaPost.length > 2 ? true : false}
								{...schemaItem}
							/>
						);
					case /image/.test(schemaItem.type) &&
						index === schemaPost.length - 1:
						return (
							<PostCreatorImage
								key={schemaItem.id}
								schemItemIndex={index}
								variant="content"
								classes="post-creater__content"
								{...schemaItem}
								moreText={schemaPost.length > 2 ? true : false}
								last
							/>
						);
					case /image/.test(schemaItem.type):
						return (
							<PostCreatorImage
								key={schemaItem.id}
								schemItemIndex={index}
								variant="content"
								classes="post-creater__content"
								{...schemaItem}
								moreText={schemaPost.length > 2 ? true : false}
							/>
						);

					default:
						break;
				}
			})}
			<PostCreatorThemes
				classes="post-creater__content"
				placeholder="Напишите тему"
			/>
			<PostCreatorSender classes="post-creater__sender" />
		</div>
	);
};

export default PostCreator;
