import styled from 'styled-components';

export const ContainerContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 3rem;
	margin-top: 50px;

	@media (max-width: 820px) {
		grid-template-columns: 1fr;
		padding: 0;
	}
`;
