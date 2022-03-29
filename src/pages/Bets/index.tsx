import BetsContainer from '@components/BetsContainer';
import Container from '@components/Container';
import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';

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
