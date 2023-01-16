import { useState } from 'react';

const useModal = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handlerOpenModal = () => {
		setIsOpenModal(true);
	};

	const handlerCloseModal = () => {
		setIsOpenModal(false);
	};


	return { isOpenModal, handlerOpenModal, handlerCloseModal};
};

export default useModal;
