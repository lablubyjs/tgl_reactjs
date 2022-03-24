import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Auth from '@pages/Auth';
import Bets from '@pages/Bets';
import Game from '@pages/Game';
import Registration from '@pages/Registration';
import ResetPassword from '@pages/ResetPassword';
import ProtectRouter from 'src/helper';
import { useAppSelector } from 'src/hooks';

export default function ContainerRoutes() {

	const token = localStorage.getItem('token')
	
	return (
		<Routes>
			<Route path='/*' element={!token ? <Navigate to='/auth' /> : <Navigate to='/home' />} />
			<Route path='/auth' element={<Auth />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/reset-password' element={<ResetPassword />} />
			<Route path='/games' element={<ProtectRouter component={<Game />} />} />
			<Route path='/home' element={<ProtectRouter component={<Bets />} />} />
		</Routes>
	);
}
