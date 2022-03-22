import styled from 'styled-components';

export const ContainerStyle = styled.main`
	display: grid;
	grid: 1fr 1fr 3fr;

	@media (max-width: 960px) {
		footer {
			margin-top: 2rem;
		}
	}

	@media (max-width: 500px) {
		footer {
			margin-top: 2rem;
		}
	}
`;
