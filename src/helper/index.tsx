import { PropsProtect } from 'src/types/index';
import React from 'react';
import { useAppSelector } from 'src/hooks';
import { Navigate } from 'react-router-dom';

const ProtectRouter = ({ component }: PropsProtect): JSX.Element => {
	const { token } = useAppSelector((state) => state.user.token);

	if (!token) {
		return <Navigate to='/auth' />;
	}

	return <>{ component }</>;
};

export default ProtectRouter;
