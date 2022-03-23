import { IBodyUser, ICreateUserResponse, ILoginResponse } from '@shared/interfaces';
import { IResetResponse } from '@shared/interfaces/AuthInterfaces';

export interface IUser {
	createUser: ({ email, password, name }: IBodyUser) => Promise<ICreateUserResponse>;
}
