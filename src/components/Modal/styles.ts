import { ReactFragment } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div<ReactFragment>`
	display: flex;
	align-content: center;
	justify-content: center;

	@keyframes slide-down {
		from {
			opacity: 0;
			transform: translateY(-3rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

`;

export const BackdropContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalOverlayContainer = styled.div`
	position: fixed;
	top: 20vh;
	left: 34%;
	width: 30%;
	background-color: white;
	padding: 1rem;
	border-radius: 14px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
	animation: slide-down 300ms ease-out forwards;

	@media (min-width: 768px) {
		width: 30rem;
		left: calc(50% - 16rem);
	}

	@media (max-width: 650px) {
		width: 70%;
		left: calc(50% - 38%);
	}
`;
