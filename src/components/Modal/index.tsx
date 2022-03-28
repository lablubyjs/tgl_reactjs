import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { BackdropContainer, ModalContainer, ModalOverlayContainer } from './style';

const Backdrop = (props: any) => {
	return <BackdropContainer onClick={props.onClose} />;
};

const ModalOverlay = (props: any) => {
	return (
		<ModalOverlayContainer>
			<div>{props.children}</div>
		</ModalOverlayContainer>
	);
};

const portalElement: any = document.getElementById('overlays');

const Modal = (props: any) => {
	return (
		<ModalContainer>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</ModalContainer>
	);
};

export default Modal;
