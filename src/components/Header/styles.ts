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
