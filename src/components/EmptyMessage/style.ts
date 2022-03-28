import { EmptyMessageProps } from '../../types';
import styled from 'styled-components';

interface IMessageContainerProps {
	fontSize: number;
}

export const MessageContainer = styled.div<IMessageContainerProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 5rem;
	font-size: ${(props) => props.fontSize}px;
	color: var(--grey);
	font-style: italic;
	font-weight: bold;
	gap: 1.5rem;

	svg {
      font-size: ${(props) => props.fontSize + 20}px;
		font-weight: normal;
	}

	a {
		font-size: ${(props) => props.fontSize - 5}px;
      text-decoration: none;
      color: var(--light-green)
	}

   a:hover {
      color: var(--grey);
   }
`;
