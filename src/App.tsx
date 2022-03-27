import React, { useEffect } from 'react';

import ContainerRoutes from '@routes/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { asyncAddGames } from '@store/games-slice';
import { asyncAddBets } from '@store/bets-slice';

function App() {
	const dispatch = useAppDispatch();
	const url = useAppSelector(state => state.bets.querys.join(''))

	useEffect(() => {
		dispatch(asyncAddGames());
		dispatch(asyncAddBets(url));
	}, []);

	return (
		<main>
			<ContainerRoutes />
			<ToastContainer />
		</main>
	);
}

export default App;
