//-----modules-----//

//-----router-----//

//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----redux-----//

//-----widgets-----//

//-----сomponents-----//
import PostListItemBodyTitle from '../PostListItemBodyTitle';

//-----style-----//
import './PostListItemBody.scss';

const PostListItemBody = (props) => {
	const { classes, postSchema } = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' post-list-item-body'}>
			{postSchema.map((schemaItem) => {
				switch (true) {
					case schemaItem.type === 'title':
						return (
							<PostListItemBodyTitle
								classes="post-list-item-body__title"
								key={schemaItem.id}
								titleText={schemaItem.value}
							/>
						);
				}
			})}

			<p className="post-list-item-body__text"></p>
			<img src="post-list-item-body__img" alt="" className="" />
		</div>
	);
};

export default PostListItemBody;
