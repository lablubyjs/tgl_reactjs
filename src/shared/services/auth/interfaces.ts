import { IBodyAuth, ILoginResponse, IChangeResponse, IResetResponse} from '@shared/interfaces';

export interface IAuth {
	login: ({ email, password }: IBodyAuth) => Promise<ILoginResponse>;
	resetPassword: ({ email }: IBodyAuth) => Promise<IResetResponse>;
	changePassword: ({ password }: IBodyAuth, token: string) => Promise<IChangeResponse>;
}
