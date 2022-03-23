import styled from 'styled-components';

export const ContainerForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-style: italic;
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
	justify-content: space-between;
	flex-direction: column;
	box-shadow: 0px 2px 25px var(--grey);
	border-radius: 14px;
	border: 1px solid #DDDDDD;
	text-align: center;

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

	@media (max-width: 850px) {
		width: 300px;
	}
`;
