import React from 'react';

import { BetsContainer, Container, Footer, Header } from '@components/index';

function Bets(): JSX.Element {
	return (
		<Container>
			<Header showHomeLink={false} />
			<BetsContainer />
			<Footer />
		</Container>
	);
}

export default Bets;
