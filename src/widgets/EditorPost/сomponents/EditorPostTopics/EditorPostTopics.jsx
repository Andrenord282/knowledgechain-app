//-----hooks-----//
import { useState, useEffect, useRef } from 'react';
import useClasses from 'hooks/useClasses';
import useInputChange from 'hooks/useInputChange';
import useFocusComponent from 'hooks/useFocusComponent';
// import useEditorPostTopics from 'hooks/useEditorPostTopics';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

//-----style-----//
import './EditorPostTopics.scss';

const EditorPostTopics = (props) => {
	const { classes, editorPostSlice } = props;
	const inheritClasses = useClasses(classes);
	const inputTopic = useInputChange('');
	const inputTopicRef = useRef(null);
	const [variantListApi, setVariantListApi] = useState([]);
	const [selectedList, setSelectedList] = useState([]);
	const [siblingList, setSiblingList] = useState([]);
	const handlerFocus = useFocusComponent(inputTopicRef);
	// const editorTopicsModel = useEditorPostTopics(editorPostSlice);
	console.log(variantListApi);
	useEffect(() => {
		if (inputTopic.value) {
			console.log(123);
			editorPostSlice.requestVariantTopic().then((list) => setVariantListApi(list));
		}
	}, [inputTopic.value]);

	return (
		<div className={inheritClasses + ' editor-post-topics'}>
			<div className="editor-post-topics__input-body">
				<input
					ref={inputTopicRef}
					type="text"
					className="editor-post-topics__input"
					placeholder="Напишите тему поста"
					value={inputTopic.value}
					onChange={inputTopic.onChenge}
					onKeyDown={inputTopic.handleKeyDown}
					onKeyUp={inputTopic.handleKeyUp}
				/>
				{/* {editorTopicsModel.inputValue && (
					<div className="editor-post-topics__variant-list">
						<Button
							classes="editor-post-topics__btn-variant"
							handleClick={editorTopicsModel.addSelectedListItem}>
							<span className="btn-text">{editorTopicsModel.inputValue}</span>
							<Icon.Plus className="btn-icon" />
						</Button>
						{editorTopicsModel.variantListApi.length > 0 &&
							editorTopicsModel.variantListApi.map((variantItem) => {
								if (variantItem.name.toLowerCase() != editorTopicsModel.inputValue.toLowerCase()) {
									return (
										<Button
											classes="editor-post-topics__btn-variant"
											key={variantItem._id}
											handleClick={editorTopicsModel.addSelectedListItem}>
											<span className="btn-text">{variantItem.name}</span>
											<Icon.Plus className="btn-icon" />
										</Button>
									);
								}
							})}
					</div>
				)} */}
			</div>
			{/* <div className="editor-post-topics__navigate">
				{editorTopicsModel.selectedList.length > 0 && (
					<div className="editor-post-topics__selected-list">
						{editorTopicsModel.selectedList.map((selectedItem) => {
							return (
								<Button
									classes="editor-post-topics__btn-selected"
									handleClick={editorTopicsModel.deleteSelectedListItem}
									key={selectedItem}>
									<span className="btn-text"> {selectedItem}</span>
									<Icon.СrossClose className="btn-icon" />
								</Button>
							);
						})}
					</div>
				)}
				{editorTopicsModel.siblingList.length > 0 && (
					<div className="editor-post-topics__sibling-list">
						<p className="editor-post-topics__sibling-list-title">Похожие темы:</p>
						{editorTopicsModel.siblingList.map((siblingItem) => {
							return (
								<Button
									classes="editor-post-topics__btn-sibling"
									handleClick={editorTopicsModel.addSiblingListItem}
									key={siblingItem._id}>
									<span className="btn-text"> {siblingItem.name}</span>
									<Icon.Plus className="btn-icon" />
								</Button>
							);
						})}
					</div>
				)}
			</div> */}
		</div>
	);
};

export default EditorPostTopics;
