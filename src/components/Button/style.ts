import styled from 'styled-components';

interface IButtonContainerProps {
	fontSize: number;
	color: string;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
	background-color: transparent;
	font-size: ${(p) => p.fontSize}px;
	border: none;
	gap: 0.5rem;
	font-style: italic;
	font-weight: bold;
	color: ${(p) => p.color};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;

	:hover {
		transform: scale(1.1);
	}
`;
