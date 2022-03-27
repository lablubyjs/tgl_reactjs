import { IBodyBet, IListBetsResponse, INewBetResponse } from '@shared/interfaces';
import instance from '../axios.config';
import { IBets } from './interfaces';

const betsServices = (): IBets => {
	async function listBet(url: string): Promise<IListBetsResponse> {
		return instance.get(url);
	}

	async function newBet(body: IBodyBet): Promise<INewBetResponse> {
		return instance.post('bet/new-bet', body);
	}

	return { listBet, newBet };
};

export default betsServices;
