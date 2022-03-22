import React from 'react';
import { Container, Span, Text } from './style';

function Slogan(): JSX.Element {
	return (
		<Container>
			<Text fontSize={65} width={50}>The Greatest App</Text>
			<Span>for</Span>
			<Text fontSize={83}>LOTTERY</Text>
		</Container>
	);
}

export default Slogan;
