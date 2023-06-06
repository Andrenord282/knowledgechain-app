//-----modules-----//

//-----router-----//

//-----hooks-----//
import useClasses from 'hooks/useClasses';
import useDayJs from 'hooks/useDayJs';

//-----redux-----//

//-----widgets-----//

//-----сomponents-----//
import Button from 'сomponents/Button';

//-----style-----//
import './PostListItemHeader.scss';

const PostListItemHeader = (props) => {
	const { classes, author, createdAt, view } = props;
	const inheritClasses = useClasses(classes);
	const createdDate = useDayJs(createdAt);

	return (
		<div className={inheritClasses + ' post-list-item-header'}>
			<div className="post-list-item-header__author">
				<span className="post-list-item-header__author-text">Автор:</span>
				<Button classes="post-list-item-header__btn-author" handleClick={() => {}}>
					<span className="btn-text">{author}</span>
				</Button>
			</div>
			<span className="post-list-item-header__created">Создан: {createdDate}</span>
			<span className="post-list-item-header__view">{view}</span>
		</div>
	);
};

export default PostListItemHeader;
