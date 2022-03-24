import {
	IBodyGames,
	ICreateGameResponse,
	IListGamesReponse,
	IUpdateGameResponse,
} from '@shared/interfaces';

export interface IGames {
	createGame: ({
		type,
		description,
		range,
		price,
		maxNumber,
		color,
	}: IBodyGames) => Promise<ICreateGameResponse>;

	updateGame: (
		{ type, description, range, price, maxNumber, color }: IBodyGames,
		id: string
	) => Promise<IUpdateGameResponse>;

	listGames: () => Promise<IListGamesReponse>;

	deleteGame: (id: string) => Promise<string>;
}
