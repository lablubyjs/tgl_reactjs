import styled from 'styled-components';

interface IContentProps {
	color: string;
}

export const ContainerCart = styled.div`
	width: 317px;
	height: 484px;
	border-radius: 10px;
	background-color: var(--white);
	margin-top: 4rem;
	color: var(--grey);
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h1 {
		font-style: italic;
		text-transform: uppercase;
		margin: 1.5rem;
		font-size: 24px;
	}

	@media (max-width: 1080px) {
		width: 90%;
	}

	@media (max-width: 820px) {
		width: 50%;
		height: 100%;
		margin: auto;

		h1 {
			font-size: 20px;
		}
	}

	@media (max-width: 400px) {
		h1 {
			font-size: 15px;
		}
	}
`;

export const ButtonSave = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--grey-button-save);
	border: 2px solid var(--grey-button-save-border);
	border-bottom-left-radius: inherit;
	border-bottom-right-radius: inherit;

	@media (max-width: 820px) {
		button {
			font-size: 20px;
		}
	}

	@media (max-width: 400px) {
		button {
			font-size: 15px;
		}
	}
`;

export const CartTotal = styled.div`
	color: var(--grey);
	font-size: 24px;
	text-align: center;

	strong {
		font-style: italic;
	}

	@media (max-width: 500px) {
		font-size: 15px;
	}

	@media (max-width: 400px) {
		font-size: 13px;
	}
`;

export const GamesContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow: auto;

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: var(--light-grey);
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--grey);
		border-radius: 10px;
		border: 2px solid var(--light-grey);
	}
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr 4fr;
	margin-bottom: 1rem;

	p {
		margin: 0.5rem;
	}

	@media (max-width: 350px) {
		font-size: 13px;

		.gameName {
			font-size: 10px;
		}

		.gameNumbers {
			padding-left: 0.25rem;
			font-size: 8px;
		}
	}
`;

export const GameInfo = styled.div<IContentProps>`
	border-left: 5px solid ${(props) => props.color};
	border-radius: 5px;

	div {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		gap: 0;
		padding-left: 0.3rem;
	}

	.gameName,
	.gameNumbers {
		font-style: italic;
		font-weight: bold;
	}

	.gameName {
		color: ${(props) => props.color};
		font-size: 16px;
	}

	.gameNumbers {
		padding-left: 0.5rem;
	}

	@media (max-width: 500px) {
		font-size: 15px;

		.gameName {
			font-size: 13px;
		}

		.gameNumbers {
			padding-left: 0.25rem;
		}
	}

	@media (max-width: 400px) {
		font-size: 13px;

		.gameName,
		p {
			font-size: 10px;
		}

		.gameNumbers {
			padding-left: 0.25rem;
			font-size: 8px;
		}
	}
`;

export const ButtonTrash = styled.button`
	background-color: transparent;
	border: none;
	font-size: 24px;
	color: var(--grey);

	@media (max-width: 400px) {
		font-size: 15px;
	}
`;

export const ContentModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: var(--grey);
	font-weight: bold;
	font-style: italic;
	text-align: center;

	svg {
		font-size: 50px;
		color: var(--green);
	}

	p strong {
		color: var(--green);
	}

	div {
		display: inherit;
		flex-direction: row;
		gap: 1rem;
	}
`;

export const ButtonModal = styled.button`
	width: 113px;
	height: 34px;
	border-radius: 100px;
	border: 2px solid var(--green);
	font-style: italic;
	font-weight: bold;
	text-transform: capitalize;
	color: var(--green);
	background-color: transparent;

	:hover {
		color: var(--white);
		background-color: var(--green);
	}

	@media (max-width: 750px) {
		width: 80px;
		height: 25px;
	}

	@media (max-width: 500px) {
		width: 50px;
		height: 20px;
		font-size: 8px;
	}
`;
