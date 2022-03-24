import { IBodyUser, ICreateUserResponse, ILoginResponse } from '@shared/interfaces';
import { IMyAccountResponse, IUpdateUserResponse } from '@shared/interfaces/UserInterfaces';
import { AxiosRequestHeaders } from 'axios';

export interface IUser {
	createUser: ({ email, password, name }: IBodyUser) => Promise<ICreateUserResponse>;
	updateMyUser: ({ email, name }: IBodyUser) => Promise<IUpdateUserResponse>;
	myAccount: () => Promise<IMyAccountResponse>;
}
