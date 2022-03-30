import React from 'react';
import { Navigate } from 'react-router-dom';

import { PropsProtect } from 'src/types/index';

const ProtectRouter = ({ component }: PropsProtect): JSX.Element => {
	const token = localStorage.getItem('token');

	if (!token) {
		return <Navigate to='/auth' />;
	}

	return <>{ component }</>;
};

export default ProtectRouter;
