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
`;

export const ButtonSave = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--grey-button-save);
	border: 2px solid var(--grey-button-save-border);
	border-bottom-left-radius: inherit;
	border-bottom-right-radius: inherit;
`;

export const CartTotal = styled.div`
	color: var(--grey);
	font-size: 24px;
	text-align: center;

	strong {
		font-style: italic;
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
`;

export const ButtonTrash = styled.button`
	background-color: transparent;
	border: none;
	font-size: 24px;
	color: var(--grey);
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
`;
