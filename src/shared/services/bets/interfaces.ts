import {
	IBodyBet,
	IListBetsResponse,
	INewBetResponse,
} from '@shared/interfaces';

export interface IBets {
	listBet: () => Promise<IListBetsResponse>;
	newBet: ({ games }: IBodyBet) => Promise<INewBetResponse>;
}
