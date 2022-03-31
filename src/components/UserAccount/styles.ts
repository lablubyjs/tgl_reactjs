import styled from "styled-components";

export const UserAccountContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	color: var(--grey);

	svg {
		font-size: 3rem;
	}

	h1 {
		font-style: italic;
		font-weight: bold;
	}

	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin: 1rem;
	}

	button {
		width: 113px;
		height: 34px;
		border-radius: 100px;
		border: 2px solid var(--light-green);
		font-style: italic;
		font-weight: bold;
		text-transform: capitalize;
		color: var(--light-green);
		background-color: transparent;
	}

	button:hover {
		color: var(--white);
		background-color: var(--light-green);
	}

	@media (max-width: 500px) {
		h1, svg {
			font-size: 15px;
		}

		button {
			width: 60px;
			height: 25px;
			font-size: 8px;
		}
	}
`;
