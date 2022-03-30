import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Auth from '@pages/Auth';
import Bets from '@pages/Bets';
import Game from '@pages/Game';
import Registration from '@pages/Registration';
import ResetPassword from '@pages/ResetPassword';
import ChangePassword from '@pages/ChangePassword';

import ProtectRouter from 'src/helper';

export default function ContainerRoutes() {
	const token = localStorage.getItem('token');

	return (
		<Routes>
			<Route
				path='/*'
				element={!token ? <Navigate to='/auth' /> : <Navigate to='/home' />}
			/>
			<Route path='/auth' element={<Auth />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/reset-password' element={<ResetPassword />} />
			<Route path='/change-password' element={<ChangePassword />} />
			<Route path='/games' element={<ProtectRouter component={<Game />} />} />
			<Route path='/home' element={<ProtectRouter component={<Bets />} />} />
		</Routes>
	);
}
