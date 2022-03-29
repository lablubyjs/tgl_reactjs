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
	padding: ${(props) => props.padding ? props.padding : '3rem'};
	margin-top: ${(props) => props.marginTop ? `${props.marginTop}px`: '45px'};

	@media (max-width: 820px) {
		grid-template-columns: 1fr;
		padding: 0;
	}
`;
