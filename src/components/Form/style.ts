import styled from 'styled-components';

export const ContainerForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-style: italic;

	button {
		background-color: transparent;
		font-size: 35px;
		border: none;
		margin-top: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-style: italic;
		font-weight: bold;
		color: var(--grey);
	}

	
`;

export const Title = styled.h1`
	color: var(--grey);
	font-weight: bold;
	text-align: center;
`;

export const FormContent = styled.form`
	background-color: var(--white);
	width: 352px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 3px 25px var(--grey);
	border-radius: 14px;
	border: 1px solid #DDDDDD;
	text-align: center;

	input {
		height: 3rem;
		outline: none;
		border: none;
		border-bottom: 2px solid var(--light-grey);
		background-color: transparent;
	}

	input::placeholder {
		font-style: italic;
		padding-left: 1rem;
		font-size: 17px;
		font-weight: bold;
		color: var(--grey-placeholder);
	}

	input:active, input:focus {
		border-color: var(--light-green);
		padding-left: 1rem;
	}

	input:invalid {
		border-color: red;
	}

	a {
		text-align: end;
		padding: 1rem;
		color: var(--grey-link);
		text-decoration: none;
	}

	a:hover {
		color: var(--grey);
	}

	a:active {
		color: var(--light-green);
	}

	button {
		cursor: pointer;
		font-size: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--light-green);
		padding: 2rem;
	}

	@media (max-width: 850px) {
		width: 300px;
	}
`;
