import useClasses from 'hooks/useClasses';
import usePostCreatorIsReady from './hooks/usePostCreatorIsReady';
import usePostCreatorForm from './hooks/usePostCreatorForm';
import usePostCreatorSender from './hooks/usePostCreatorSender';
import useModal from 'hooks/useModal';

import { useSelector } from 'react-redux';
import { selectPostCreator } from '../../model';

import Modal from 'сomponents/Modal/Modal';
import Button from 'сomponents/Button';
import { AlertLoading } from 'сomponents/Alert';
import { AlertSuccess } from 'сomponents/Alert';
import { AlertError } from 'сomponents/Alert';
import classNames from 'classnames';
import './PostCreatorSender.scss';

const PostCreatorSender = ({ classes }) => {
	const inheritClasses = useClasses(classes);
	const postCreator = useSelector(selectPostCreator);
	const isReadySchema = usePostCreatorIsReady();
	const modal = useModal();
	const form = usePostCreatorForm(postCreator);
	const sender = usePostCreatorSender(
		form.formData,
		form.readyForm,
		modal.handlerOpenModal,
		modal.handlerCloseModal,
	);

	const sendBtnClass = classNames({
		'': isReadySchema,
		inactive: !isReadySchema,
	});

	return (
		<>
			<div className={inheritClasses + ' post-creator-sender'}>
				<Button
					classes={'post-creator-sender__btn btn_default ' + sendBtnClass}
					handleClick={sender.handlerSendPostCreator}>
					<span className="btn__text">Создать</span>
				</Button>
			</div>
			<Modal isOpenModal={modal.isOpenModal}>
				{sender.statusReq === 'loading' && <AlertLoading {...sender.alertMessage} />}
				{sender.statusReq === 'success' && <AlertSuccess {...sender.alertMessage} />}
				{sender.statusReq === 'error' && <AlertError {...sender.alertMessage} />}
			</Modal>
		</>
	);
};

export default PostCreatorSender;
