import styled from 'styled-components';

export const ContainerBets = styled.div`
	padding: 3rem 6rem;
	min-height: 68vh;
`;

export const HeaderBets = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 2rem;
	justify-content: space-between;

	div {
		display: inherit;
		align-items: center;
	}

	h1 {
		color: var(--grey);
		font-style: italic;
		font-size: 24px;
	}

	h3 {
		color: var(--grey);
		font-style: italic;
		font-size: 17px;
		font-weight: normal;
		padding-left: 3rem;
	}
`;

export const Bet = styled.div`
	display: grid;
	grid-template-columns: 0.01fr 1fr;
	justify-content: space-between;
	margin-bottom: 1.5rem;

	hr {
		transform: rotate(180deg);
		background-color: ${(props) => props.color};
		height: 100%;
		width: 6px;
		border-radius: 100px;
		border: none;
		margin: 0;
	}

	p {
		margin: 0;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.5rem;
		color: var(--grey);
		margin-left: 0.8rem;
	}

	.numbers {
		font-size: 20px;
		font-weight: bold;
		font-style: italic;
	}

	.date-price {
		font-size: 17px;
	}

	.type {
		font-size: 20px;
		font-weight: bold;
		font-style: italic;
		color: ${(props) => props.color};
	}
`;

export const ButtonsGamesContainer = styled.div`
   margin: 1rem;

   button {
      margin: 0.5rem;
   }
`