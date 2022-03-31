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

	@media (max-width: 820px) {
		height: 3rem;
	}

	@media (max-width: 400px) {
		height: 2.5rem;
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

	@media (max-width: 820px) {
		gap: 0.5rem;
		margin-left: 3rem;

		a {
			font-size: 30px;
		}

		hr {
			width: 5rem;
			height: 0.25rem;
			padding-top: 0.3rem;
		}
	}

	@media (max-width: 400px) {
		margin-left: 1.5rem;

		a {
			padding-top: 0.75rem;
			font-size: 20px;
		}

		hr {
			width: 3rem;
			height: 0.05rem;
			padding-top: 0.3rem;
		}

		button {
			font-size: 8px;
		}
	}
`;

export const Navigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 4rem;
	margin-right: 5rem;

	@media (max-width: 400px) {
		gap: 1rem;
		margin-right: 2rem;

		button {
			font-size: 8px;
		}
	}
`;