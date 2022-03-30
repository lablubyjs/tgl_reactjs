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

	@media (max-width: 750px) {
		width: 80px;
		height: 20px;
		font-size: 10px;
		border: 1px solid ${(props) => props.color};
	}

	@media (max-width: 400px) {
		width: 50px;
		height: 15px;
		font-size: 6px;
		border: 1px solid ${(props) => props.color};
	}
`;
