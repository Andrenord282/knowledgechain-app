import useEventOutside from 'hooks/useEventOutside';
import { useState, useRef } from 'react';

const useOpenSortList = () => {
	const refBtnSet = useRef(null);

	const [openSortList, setOpenSortList] = useState(false);

	useEventOutside(refBtnSet, () => setOpenSortList(false));

	const handlerOpenSortList = () => {
		setOpenSortList(!openSortList);
	};

	return { openSortList,refBtnSet,  handlerOpenSortList };
};

export default useOpenSortList;
