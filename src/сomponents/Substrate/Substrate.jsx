import { useDispatch, useSelector } from 'react-redux';
import { toggleActive } from 'Redux/slices/substrateSlice';

import classNames from 'classnames';
import 'сomponents/Substrate/Substrate.scss';

const Substrate = () => {
	const dispatch = useDispatch();
	const { active } = useSelector((state) => state.substrate);

	const setActiveSubstrateClass = classNames({
		active: active,
		'': !active,
	});

	const handlerToggleSubstrate = (e) => {
		const self = e.target;
		if (self.classList.contains('substrate')) {
			dispatch(toggleActive(false));
		}
	};

	return (
		<div
			className={'substrate ' + setActiveSubstrateClass}
			onClick={handlerToggleSubstrate}></div>
	);
};

export default Substrate;
