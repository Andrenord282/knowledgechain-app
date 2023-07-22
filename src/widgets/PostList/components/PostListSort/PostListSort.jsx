//-----modules-----//
import classNames from 'classnames';

//-----router-----//

//-----hooks-----//
import { useEventOutside } from 'hooks/useEventOutside';

//-----controllers-----//
import { usePostListController } from "controllers";

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectSort } from 'store/postListSlice';

//-----widgets-----//

//-----components-----//
import Button from 'components/Button';

//-----style-----//
import './PostListSort.scss';
import { useRef, useState } from 'react';

const sortVariantList = [
    { value: 'ratingCounter', text: 'Рейтинг', order: -1 },
    { value: 'createdAt', text: 'Дата', order: -1 },
    { value: 'commentsCounter', text: 'Комментарии', order: -1 },
    { value: 'viewCounter', text: 'Просмотры', order: -1 },
];


const PostListSort = (props) => {
    const { classes } = props;
    const sortSortListRef = useRef(null);
    const [toggleSortList, setToggleSortList] = useState(false);
    const sort = useSelector(selectSort);

    const postListController = usePostListController();

    useEventOutside(sortSortListRef, () => {
        setToggleSortList(false);
    });

    const handletoggleSortList = () => {
        setToggleSortList((prevToggleList) => !prevToggleList);
    };

    const handleSetSortOrder = () => {
        postListController.setSortOrder();
    };

    const handleSetSortValue = (e) => {
        const self = e.target;
        const btnSortValue = self.closest('[data-btn-role="sort-value"]');
        if (btnSortValue) {
            const valueIndex = +btnSortValue.dataset.btnIndex;
            postListController.setSortValue(sortVariantList[valueIndex]);
        }
    };

    const classSortVariantActive = classNames({
        'sort-list-active': toggleSortList,
        '': !toggleSortList,
    });


    return (
        <div className={classNames(classes, 'post-list-sort')}>
            <div className='post-list-sort__order'>
                <span className='post-list-sort__order-text'>Сортировать по</span>
                <Button classes='post-list-sort__order-btn' handleClick={handleSetSortOrder}>
                    <span className='btn-text'>{sort.order === -1 ? 'убыванию:' : 'возрастанию:'}</span>
                </Button>
            </div>
            <div className='post-list-sort__sort-list' ref={sortSortListRef}>
                {sort && (
                    <Button classes={classNames(classSortVariantActive, 'post-list-sort__seleted-btn')}
                        handleClick={handletoggleSortList}>
                        <span className='btn-text'>{sort.text}</span>
                    </Button>
                )}
                <div className='post-list-sort__variant-list'>
                    {toggleSortList && sortVariantList && sortVariantList.length > 0 && sortVariantList.map((sortVariant, index) => {
                        switch (true) {
                            case sortVariant.text !== sort.text:
                                return (
                                    <Button classes='post-list-sort__variant-btn'
                                        key={sortVariant.value}
                                        data-btn-role='sort-value'
                                        data-btn-index={index}
                                        handleClick={handleSetSortValue}>
                                        <span className='btn-text'>{sortVariant.text}</span>
                                    </Button>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>
            </div>
        </div >
    );

};

export default PostListSort;