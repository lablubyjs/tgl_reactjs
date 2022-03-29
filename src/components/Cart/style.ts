import styled from 'styled-components';

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
