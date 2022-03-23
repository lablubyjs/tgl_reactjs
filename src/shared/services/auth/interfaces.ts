import { IBodyAuth, ILoginResponse } from '@shared/interfaces';
import { IResetResponse } from '@shared/interfaces/AuthInterfaces';

export interface IAuth {
	login: ({ email, password }: IBodyAuth) => Promise<ILoginResponse>;
	resetPassword: ({ email }: IBodyAuth) => Promise<IResetResponse>;
}
