import { useDispatch, useSelector } from 'react-redux';
import { toggleVisible, setType } from 'Redux/slices/modalSlice';

import SignIn from 'сomponents/SignIn/SignIn';
import SignUp from 'сomponents/SignUp/SignUp';

import classNames from 'classnames';
import 'сomponents/Modal/Modal.scss';

const Modal = () => {
	const dispatch = useDispatch();

	const { visible, lock, type } = useSelector((state) => state.modal);

	const setVisibleClass = classNames({
		visible: visible,
		'': !visible,
	});

	const handlerToggleModal = (e) => {
		const self = e.target;
		if (self.classList.contains('modal') && !lock) {
			dispatch(toggleVisible());
			dispatch(setType(null));
		}
	};

	return (
		<div className={'modal ' + setVisibleClass} onClick={handlerToggleModal}>
			<div className="modal__content">
				{type === 'SignIn' && <SignIn />}
				{type === 'SignUp' && <SignUp />}
			</div>
		</div>
	);
};

export default Modal;
