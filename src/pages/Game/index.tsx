import React from 'react';

import {
	Cart,
	Container,
	Content,
	Footer,
	GamesContainer,
	Header,
} from '@components/index';

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
