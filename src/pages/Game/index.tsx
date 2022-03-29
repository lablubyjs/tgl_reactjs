import Cart from '@components/Cart';
import Container from '@components/Container';
import Content from '@components/Content';
import Footer from '@components/Footer';
import GamesContainer from '@components/GamesContainer';
import Header from '@components/Header';
import React from 'react';

function Game(): JSX.Element {
	return (
		<Container>
			<Header showHomeLink={true} />
			<Content colums='3fr 1.5fr' padding='0' marginTop='25px'>
				<GamesContainer />
				<Cart />
			</Content>
			<Footer />
		</Container>
	);
}

export default Game;
