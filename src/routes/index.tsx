import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Auth from '@pages/Auth';
import Bets from '@pages/Bets';
import Game from '@pages/Game';
import Registration from '@pages/Registration';
import ResetPassword from '@pages/ResetPassword';

export default function ContainerRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/auth' />} />
			<Route path='/auth' element={<Auth />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/reset-password' element={<ResetPassword />} />
			<Route path='/game' element={<Game />} />
			<Route path='/bets' element={<Bets />} />
		</Routes>
	);
}
