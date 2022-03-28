import { ButtonGameProps } from '../../../types';
import styled from 'styled-components';

interface IButtonGameProps {
	color: string;
	isSelected: boolean;
}

export const Button = styled.button<IButtonGameProps>`
	color: ${(props) => (props.isSelected ? 'var(--white)' : props.color)};
	background-color: ${(props) =>
		props.isSelected ? props.color : 'transparent'};
	width: 113px;
	height: 34px;
	border-radius: 100px;
	border: 2px solid ${(props) => props.color};
	font-style: italic;
	font-weight: bold;
	text-transform: capitalize;

	:hover {
		color: var(--white);
		background-color: ${(props) => props.color};
	}
`;
