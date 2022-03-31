import React, { useEffect } from 'react';

import { ToastContainer } from 'react-toastify';

import ContainerRoutes from '@routes/index';

import { asyncAddGames } from '@store/games-slice';
import { asyncAddBets } from '@store/bets-slice';
import { asyncAddMinCartValue } from '@store/cart-slice';

import { useAppDispatch, useAppSelector } from './hooks';

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
	const token = localStorage.getItem('token');
	const dispatch = useAppDispatch();
	const url = useAppSelector((state) => state.bets.querys.join(''));

	useEffect(() => {
		if (token) {
			dispatch(asyncAddGames());
			dispatch(asyncAddBets(url));
			dispatch(asyncAddMinCartValue());
		}
	}, [dispatch]);

	return (
		<main>
			<ContainerRoutes />
			<ToastContainer />
		</main>
	);
}

export default App;
