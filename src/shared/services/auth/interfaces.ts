import { IBodyAuth, ILoginResponse } from '@shared/interfaces';
import { IChangeResponse, IResetResponse } from '@shared/interfaces/AuthInterfaces';

export interface IAuth {
	login: ({ email, password }: IBodyAuth) => Promise<ILoginResponse>;
	resetPassword: ({ email }: IBodyAuth) => Promise<IResetResponse>;
	changePassword: ({ password }: IBodyAuth, token: string) => Promise<IChangeResponse>;
}
