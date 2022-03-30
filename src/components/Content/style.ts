import styled from 'styled-components';

interface IContainerContentProps {
	colums?: string;
	padding?: string;
	marginTop?: string;
}

export const ContainerContent = styled.div<IContainerContentProps>`
	display: grid;
	grid-template-columns: ${(props) =>
		props.colums ? props.colums : '1fr 1fr'};
	padding: ${(props) => (props.padding ? props.padding : '3rem')};
	margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '45px')};
	min-height: 70vh;

	@media (max-width: 820px) {
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: center;
		padding: 0;
		gap: 0;
		
	}

	@media (max-width: 400px) {
		justify-content: space-between;
		width: 100vw;
	}
`;
