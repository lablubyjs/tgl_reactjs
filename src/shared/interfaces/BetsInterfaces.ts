export interface IBodyBet {
	games: IGame[];
}

export interface IGame {
	gameID: number;
	numbers: number[];
}

export interface IListBetsResponse {
	bets: Bet[]
}

interface Bet {
	id: number;
	userID: number;
	gameID: number;
	choosenNumbers: string;
	price: number;
	createdAt: Date;
	type: Type;
}

interface Type {
	id: number;
	type: string;
}

export interface INewBetResponse {
	bet: Bet[];
}

interface Bet {
	choosenNumbers: string;
	userID: number;
	gameID: number;
	price: number;
	createdAt: Date;
	updatedAt: Date;
	id: number;
}
