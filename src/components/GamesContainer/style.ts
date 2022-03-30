import styled from 'styled-components';

interface IButtonActionProps {
	color: string;
	backgroundColor: string;
	width: number;
}

interface IButtonNumberProps {
	backgroundColor: string | undefined;
}

export const ContainerGames = styled.div`
	padding: 3rem 6rem;
	min-height: 68vh;
	color: var(--grey);
	font-style: italic;
	font-weight: normal;

	h1 {
		font-weight: lighter;
		text-transform: uppercase;
		font-size: 24px;
	}

	h3,
	h4,
	p {
		font-size: 17px;
	}

	button {
		margin-right: 1rem;
	}

	@media (max-width: 1096px) {
		padding: 1rem 3rem;
	}

	@media (max-width: 750px) {
		h1 {
			font-size: 18px;
		}

		h3,
		h4,
		p {
			font-size: 13px;
		}

		button {
			margin-right: 0.5rem;
		}
	}

	@media (max-width: 400px) {
		padding: auto;
		min-height: 0;

		h1 {
			font-size: 15px;
		}

		h3,
		h4,
		p {
			font-size: 10px;
		}
	}
`;

export const ButtonsActions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		display: inherit;
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const ButtonAction = styled.button<IButtonActionProps>`
	color: ${(props) => props.color};
	background-color: ${(props) => props.backgroundColor};
	width: ${(props) => props.width}px;
	height: 52px;
	border: 2px solid var(--green);
	border-radius: 10px;
	font-size: 16px;
	font-weight: bold;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	gap: 1.5rem;
	margin-top: 2rem;

	svg {
		font-size: 26px;
	}

	@media (max-width: 750px) {
		width: ${(props) => props.width - 50}px;
		height: 30px;
		font-size: 8px;

		svg {
			font-size: 13px;
		}
	}

	@media (max-width: 400px) {
		width: ${(props) => props.width - 80}px;
		height: 20px;
		font-size: 7px;

		svg {
			font-size: 9px;
		}
	}
`;

export const ButtonNumber = styled.button<IButtonNumberProps>`
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : 'var(--grey-button)'};
	font-size: 15px;
	font-weight: bold;
	color: var(--white);
	border: none;
	border-radius: 50%;
	height: 50px;
	width: 50px;
	margin-bottom: 0.5rem;

	@media (max-width: 750px) {
		height: 35px;
		width: 35px;
		font-size: 13px;
	}

	@media (max-width: 400px) {
		height: 20px;
		width: 20px;
		font-size: 8px;
	}
`;
