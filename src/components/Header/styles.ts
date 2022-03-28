import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: grid;
	grid-template-columns: 2fr 4fr;
	justify-content: space-between;
	font-style: italic;
	font-weight: bold;
	height: 4rem;
	border-bottom: 2px solid #ebebeb;

	button {
		padding: 0;
	}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 3rem;
	margin-left: 5rem;

	a {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		color: var(--grey);
		font-size: 44px;
		text-decoration: none;
		padding-top: 0.3rem;
	}

	hr {
		width: 6.5rem;
		height: 0.45rem;
		background-color: var(--light-green);
		border: none;
		border-radius: 6px;
		padding-top: 0.2rem;
		margin: 0;
	}
`;

export const Navigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 4rem;
	margin-right: 5rem;
`;

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
`;
