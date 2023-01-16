import { createPortal } from 'react-dom';

import classNames from 'classnames';
import 'сomponents/Modal/Modal.scss';

const Modal = (props) => {
	const { isOpenModal, handlerCloseModal, children } = props;

	if (!isOpenModal) return;

	const modalClass = classNames({
		visible: isOpenModal,
		'': !isOpenModal,
	});

	return createPortal(
		<div
			className={'modal ' + modalClass}
			onClick={handlerCloseModal ? handlerCloseModal : null}>
			<div
				className="modal__content"
				onClick={(e) => {
					e.stopPropagation();
				}}>
				{children}
			</div>
		</div>,
		document.getElementById('modal'),
	);
};

export default Modal;
