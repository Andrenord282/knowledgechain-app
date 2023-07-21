/* eslint-disable react-hooks/exhaustive-deps */
//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useState, useRef, memo, useEffect } from 'react';
import { useDebounce } from "hooks/useDebounce";
import { useInputChange } from 'hooks/useInputChange';

//-----controllers-----//
import { usePostCreatorController } from "controllers";

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectTopics } from 'store/postCreatorSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';

//-----style-----//
import './PostCreatorTopics.scss';

const PostCreatorTopics = (props) => {
    const { classes } = props;
    const topicInputRef = useRef(null);
    const topicInput = useInputChange('');
    const topicsSelected = useSelector(selectTopics);
    const [topicVariantList, setTopicVariantList] = useState([]);
    const [topicSimilarList, setTopicSimilarList] = useState([]);

    const debouncedSearchTopic = useDebounce(topicInput.value);
    const postCreatorController = usePostCreatorController();

    useEffect(() => {
        if (debouncedSearchTopic.length === 0) {
            return;
        }
        postCreatorController.topicSearch(debouncedSearchTopic)
            .then((topicVariantList) => setTopicVariantList(topicVariantList));
    }, [debouncedSearchTopic]);

    const hanldeChangeTopic = (e) => {
        topicInput.onChenge(e);
        if (e.target.value.length <= 2) {
            setTopicVariantList([]);
        }
    };

    const handleAddTopic = (e) => {
        const self = e.target;
        const topicBtnVariant = self.closest('[data-btn-role="add-variant"]');
        const topicBtnSimilar = self.closest('[data-btn-role="add-similar"]');

        if (topicBtnVariant) {
            const topicIndex = topicBtnVariant.dataset.indexBtn;
            postCreatorController.addTopic(topicVariantList[topicIndex].name);

            if (topicVariantList[topicIndex].topicsSimilar.length > 0) {
                setTopicSimilarList(topicVariantList[topicIndex].topicsSimilar);
            }

            setTopicVariantList([]);

            topicInput.onReset();
            topicInputRef.current.focus();
            return;
        }

        if (topicBtnSimilar) {
            const topicIndex = topicBtnSimilar.dataset.indexBtn;
            postCreatorController.addTopic(topicSimilarList[topicIndex].name);

            const newTopicSimilarList = topicSimilarList.filter((similarItem) => {
                return similarItem.name !== topicSimilarList[topicIndex].name;
            });

            setTopicSimilarList(newTopicSimilarList);
            return;
        }
    };

    const handleDeletTopic = (e) => {
        const self = e.target;
        const topicBtnSelected = self.closest('[data-btn-role="delete-topic"]');
        if (topicBtnSelected) {
            const topicIndex = +topicBtnSelected.dataset.indexBtn;
            postCreatorController.deleteTopic(topicIndex);
        }
    };

    return (
        <div className={classNames(classes, 'post-creator-topics')}>
            <div className="post-creator-topics__input-body">
                <input
                    ref={topicInputRef}
                    type="text"
                    className="post-creator-topics__input"
                    placeholder="Добавьте тему поста"
                    value={topicInput.value}
                    onChange={hanldeChangeTopic}
                />
                {topicVariantList.length > 0 && (
                    <div className="post-creator-topics__variant-list">
                        {topicVariantList.map((topicVariantItem, itemIndex) => {
                            return (
                                <Button
                                    classes="post-creator-topics__variant-btn"
                                    key={topicVariantItem._id}
                                    data-btn-role={'add-variant'}
                                    data-index-btn={itemIndex}
                                    handleClick={handleAddTopic}>
                                    <span className="btn-text">{topicVariantItem.name}</span>
                                    <Icon.Plus className="btn-icon" />
                                </Button>
                            );
                            // }
                        })}
                    </div>
                )}
            </div>
            <div className="post-creator-topics__nav-lists">
                {topicsSelected.length > 0 && (
                    <div className="post-creator-topics__nav-list">
                        <p className="post-creator-topics__nav-list-title">Выбранные темы:</p>
                        {topicsSelected.map((selectedItem, itemIndex) => {
                            return (
                                <Button
                                    classes="post-creator-topics__nav-btn"
                                    key={selectedItem}
                                    data-btn-role={'delete-topic'}
                                    data-index-btn={itemIndex}
                                    handleClick={handleDeletTopic}>
                                    <span className="btn-text"> {selectedItem}</span>
                                    <Icon.СrossClose className="btn-icon" />
                                </Button>
                            );
                        })}
                    </div>
                )}
                {topicSimilarList.length > 0 && topicsSelected.length > 0 && (
                    <div className="post-creator-topics__nav-list">
                        <p className="post-creator-topics__nav-list-title">Похожие темы:</p>
                        {topicSimilarList.map((similarItem, itemIndex) => {
                            return (
                                <Button
                                    classes="post-creator-topics__nav-btn"
                                    key={similarItem._id}
                                    data-btn-role={'add-similar'}
                                    data-index-btn={itemIndex}
                                    handleClick={handleAddTopic}>
                                    <span className="btn-text"> {similarItem.name}</span>
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

export default memo(PostCreatorTopics);
