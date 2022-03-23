import { IResetResponse } from '@shared/interfaces/AuthInterfaces';
import { IBodyAuth, ILoginResponse } from '../../interfaces';
import instance from '../axios.config';
import { IAuth } from './interfaces';

const authServices = (): IAuth => {
	async function login(body: IBodyAuth): Promise<ILoginResponse> {
      return instance.post('/login', body);
	}

   async function resetPassword(body: IBodyAuth): Promise<IResetResponse> {
      return instance.post('/reset', body);
	}

	return { login, resetPassword };
};

export default authServices;