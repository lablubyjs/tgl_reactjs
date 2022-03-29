import styled from 'styled-components';

export const InputContent = styled.label`
	input {
		width: 95%;
		height: 3rem;
		outline: none;
		border: none;
		border-bottom: 2px solid var(--light-grey);
		background-color: transparent;
		vertical-align: middle;
	}

	input::placeholder {
		font-style: italic;
		font-size: 17px;
		font-weight: bold;
		color: var(--grey-placeholder);
	}

	input:active,
	input:focus {
		border-color: var(--light-green);
	}

	input::-webkit-input-placeholder {
		color: var(--grey);
	}

	input:focus::-webkit-input-placeholder {
		color: transparent;
	}

	input:focus,
	input:active,
	input:valid,
	input:invalid {
		padding-left: 1rem;
		outline: 0;
	}

	input:invalid {
		border-color: red;
	}
`;

export const Error = styled.div`
	padding: 1rem;
	color: red;
`
