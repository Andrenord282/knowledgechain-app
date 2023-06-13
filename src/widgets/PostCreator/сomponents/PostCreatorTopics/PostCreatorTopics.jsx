//-----hooks-----//
import { useState, useRef, memo } from 'react';
import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';
import useFocusComponent from 'hooks/useFocusComponent';

//-----controllers-----//
import { usePostCreatorTopicsController } from 'controllers';
//-----redux-----//

//-----selectors-----//
import { selectTopicListSelected } from 'store/postCreatorTopicsSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

//-----style-----//
import './PostCreatorTopics.scss';
import { useSelector } from 'react-redux';

const PostCreatorTopics = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const topicInput = useInputChange('');
	const topicInputRef = useRef(null);
	const topicListSelected = useSelector(selectTopicListSelected);
	const [topicVariantList, setTopicVariantList] = useState([]);
	const handlerFocus = useFocusComponent(topicInputRef);
	const postCreatorTopicsController = usePostCreatorTopicsController();

	const hanlderChangeTopic = async (e) => {
		topicInput.onChenge(e);
		if (e.target.value.length > 2) {
			const topics = await postCreatorTopicsController.requestTopics(e.target.value);
			setTopicVariantList(topics);
		}
		if (e.target.value.length <= 2) {
			setTopicVariantList([]);
		}
	};

	const handlerAddTopic = (e) => {
		const self = e.target;
		const topicBtnVariant = self.closest('[data-btn-role="topic-variant"]');
		if (topicBtnVariant) {
			const topicIndex = topicBtnVariant.dataset.indexBtn;
			postCreatorTopicsController.addTopic(topicVariantList[topicIndex].name);
			setTopicVariantList([]);
			handlerFocus.onFocus();
			topicInput.onReset();
		}
	};

	const handlerDeletTopic = (e) => {
		const self = e.target;
		const topicBtnSelected = self.closest('[data-btn-role="topic-selected"]');
		if (topicBtnSelected) {
			const topicIndex = +topicBtnSelected.dataset.indexBtn;
			postCreatorTopicsController.deleteTopic(topicIndex);
		}
	};

	return (
		<div className={`${inheritClasses} post-creator-topics`}>
			<div className="post-creator-topics__input-body">
				<input
					ref={topicInputRef}
					type="text"
					className="post-creator-topics__input"
					placeholder="Напишите тему поста"
					value={topicInput.value}
					onChange={hanlderChangeTopic}
				/>
				{topicVariantList.length > 0 && (
					<div className="post-creator-topics__variant-list">
						{topicVariantList.map((topicVariantItem, itemIndex) => {
							return (
								<Button
									classes="post-creator-topics__btn-variant"
									key={topicVariantItem._id}
									data-btn-role={'topic-variant'}
									data-index-btn={itemIndex}
									handleClick={handlerAddTopic}>
									<span className="btn-text">{topicVariantItem.name}</span>
									<Icon.Plus className="btn-icon" />
								</Button>
							);
							// }
						})}
					</div>
				)}
			</div>
			<div className="post-creator-topics__navigate">
				{topicListSelected.length > 0 && (
					<div className="post-creator-topics__selected-list">
						{topicListSelected.map((topicSelectItem, itemIndex) => {
							return (
								<Button
									classes="post-creator-topics__btn-selected"
									key={topicSelectItem}
									data-btn-role={'topic-selected'}
									data-index-btn={itemIndex}
									handleClick={handlerDeletTopic}>
									<span className="btn-text"> {topicSelectItem}</span>
									<Icon.СrossClose className="btn-icon" />
								</Button>
							);
						})}
					</div>
				)}
				{/* {editorTopicsModel.siblingList.length > 0 && (
					<div className="post-creator-topics__sibling-list">
						<p className="post-creator-topics__sibling-list-title">Похожие темы:</p>
						{editorTopicsModel.siblingList.map((siblingItem) => {
							return (
								<Button
									classes="post-creator-topics__btn-sibling"
									handleClick={editorTopicsModel.addSiblingListItem}
									key={siblingItem._id}>
									<span className="btn-text"> {siblingItem.name}</span>
									<Icon.Plus className="btn-icon" />
								</Button>
							);
						})}
					</div>
				)} */}
			</div>
		</div>
	);
};

export default memo(PostCreatorTopics);
