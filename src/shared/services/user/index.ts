import { IBodyUser, ICreateUserResponse } from '../../interfaces';
import instance from '../axios.config';
import { IUser } from './interfaces';

const createUserServices = (): IUser => {
	async function createUser(body: IBodyUser): Promise<ICreateUserResponse> {
		return instance.post('/user/create', body);
	}

	return { createUser };
};

export default createUserServices;
