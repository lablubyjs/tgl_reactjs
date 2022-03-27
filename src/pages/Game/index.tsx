import Container from '@components/Container';
import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';

function Game(): JSX.Element {
	return (
		<Container>
			<Header showHomeLink={false} />
			<Footer />
		</Container>
	);
}

export default Game;
