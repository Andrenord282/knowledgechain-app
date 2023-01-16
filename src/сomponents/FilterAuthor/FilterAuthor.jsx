import useClasses from 'hooks/useClasses';
import useDebounce from 'hooks/useDebounce';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
	addFilterAuthor,
	deleteFilterAuthor,
	authorsSelector,
} from 'store/slices/optionsPostListSlice/optionsPostListSlice';

import searchService from 'services/searchService';

import { ReactComponent as IconPlus } from 'assets/img/svg/icon-plus.svg';
import Button from 'сomponents/_global/Button';
import FilterAuthorValues from 'сomponents/FilterAuthorValues/FilterAuthorValues';
import FilterListSearch from 'сomponents/FilterListSearch/FilterListSearch';
import InputFilter from 'сomponents/_global/Input/Input';
import classNames from 'classnames';
import 'сomponents/FilterAuthor/FilterAuthor.scss';
import 'сomponents/_global/Button/btn_filter-open.scss';

const FilterAuthor = ({ classes }) => {
	const inheritClasses = useClasses(classes);
	const dispatch = useDispatch();
	const [openFilter, setOpenFilter] = useState(false);
	const [searchAuthor, setSearchAuthor] = useState('');
	const [foundAuthors, setFoundAuthors] = useState([]);
	const authorsQuery = useSelector(authorsSelector);
	const debounsSearch = useDebounce(searchService.searchAuthor, 300);

	const handlerChangeFilter = (e) => {
		setSearchAuthor(e.target.value);
		debounsSearch('authors', e.target.value, setFoundAuthors);
	};

	const handlerToggleFilter = () => {
		setOpenFilter(!openFilter);
	};

	const handlerAddAuthor = (e) => {
		const self = e.target;
		if (self.closest('.btn_filter-add')) {
			const author = self.textContent;
			dispatch(addFilterAuthor({ author }));
			setSearchAuthor('');
			setFoundAuthors([]);
		}
	};

	const handlerDeleteAuthor = (e) => {
		const self = e.target;
		if (self.closest('[data-index-item-list]')) {
			const authorIndex = self.closest('[data-index-item-list]').dataset
				.indexItemList;
			dispatch(deleteFilterAuthor({ authorIndex }));
		}
	};

	const handlerBlurInput = () => {
		setTimeout(() => {
			setFoundAuthors([]);
		}, 300);
	};

	useEffect(() => {
		if (searchAuthor.length === 0) {
			setFoundAuthors([]);
		}
	}, [searchAuthor]);

	const filterBtnClass = classNames({
		active: openFilter,
		'': !openFilter,
	});

	return (
		<div className={inheritClasses + ' filter-author'}>
			<Button
				classes={
					filterBtnClass + ' filter-author__btn-open btn btn_filter-open'
				}
				handleClick={handlerToggleFilter}>
				<span className="btn__wrapper-icon">
					<IconPlus className="btn__icon" />
				</span>
				<span className="btn__text">Автор:</span>
			</Button>
			<div className="filter-author__nav">
				<div className="filter-rating__query">
					{openFilter && (
						<InputFilter
							classes="filter-author__input"
							placeholder="Напишите ник"
							id="Автор"
							name="Автор"
							value={searchAuthor}
							handlerBlur={handlerBlurInput}
							handlerChange={handlerChangeFilter}
						/>
					)}
					{foundAuthors.length > 0 && (
						<FilterAuthorValues
							classes="filter-author__values"
							filterAuthor={foundAuthors}
							addAuthor={handlerAddAuthor}
						/>
					)}
				</div>
				<FilterListSearch
					classes="filter-author__search-list"
					list={authorsQuery}
					deleteItem={handlerDeleteAuthor}
				/>
			</div>
		</div>
	);
};

export default FilterAuthor;
