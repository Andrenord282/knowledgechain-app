//-----hooks-----//
import useClasses from 'hooks/useClasses';
import useEditorNewPostTopics from 'hooks/useEditorNewPostTopics';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

//-----style-----//
import './EditorNewPostTopics.scss';

const EditorNewPostTopics = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);

	const editorTopicsModel = useEditorNewPostTopics();

	return (
		<div className={inheritClasses + ' editor-new-post-topics'}>
			<div className="editor-new-post-topics__input-body">
				<input
					ref={editorTopicsModel.focusRef}
					type="text"
					className="editor-new-post-topics__input"
					placeholder="Напишите тему поста"
					value={editorTopicsModel.inputValue}
					onChange={editorTopicsModel.onChenge}
					onKeyDown={editorTopicsModel.handleKeyDown}
					onKeyUp={editorTopicsModel.handleKeyUp}
				/>
				{editorTopicsModel.inputValue && (
					<div className="editor-new-post-topics__variant-list">
						<Button
							classes="editor-new-post-topics__btn-variant"
							handleClick={editorTopicsModel.addSelectedListItem}>
							<span className="btn-text">{editorTopicsModel.inputValue}</span>
							<Icon.Plus className="btn-icon" />
						</Button>
						{editorTopicsModel.variantListApi.length > 0 &&
							editorTopicsModel.variantListApi.map((variantItem) => {
								if (variantItem.name.toLowerCase() != editorTopicsModel.inputValue.toLowerCase()) {
									return (
										<Button
											classes="editor-new-post-topics__btn-variant"
											key={variantItem._id}
											handleClick={editorTopicsModel.addSelectedListItem}>
											<span className="btn-text">{variantItem.name}</span>
											<Icon.Plus className="btn-icon" />
										</Button>
									);
								}
							})}
					</div>
				)}
			</div>
			<div className="editor-new-post-topics__navigate">
				{editorTopicsModel.selectedList.length > 0 && (
					<div className="editor-new-post-topics__selected-list">
						{editorTopicsModel.selectedList.map((selectedItem) => {
							return (
								<Button
									classes="editor-new-post-topics__btn-selected"
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
					<div className="editor-new-post-topics__sibling-list">
						<p className="editor-new-post-topics__sibling-list-title">Похожие темы:</p>
						{editorTopicsModel.siblingList.map((siblingItem) => {
							return (
								<Button
									classes="editor-new-post-topics__btn-sibling"
									handleClick={editorTopicsModel.addSiblingListItem}
									key={siblingItem._id}>
									<span className="btn-text"> {siblingItem.name}</span>
									<Icon.Plus className="btn-icon" />
								</Button>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default EditorNewPostTopics;
