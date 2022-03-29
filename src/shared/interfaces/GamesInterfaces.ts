export interface IBodyGames {
	type: string;
	description: string;
	range: number;
	price: number;
	maxNumber: number;
	color: string;
}

export interface ICreateGameResponse extends IBodyGames {}

export interface IUpdateGameResponse {
	id: number;
	type: string;
	description: string;
	range: number;
	price: number;
	maxNumber: number;
	color: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IListGamesReponse {
	min_cart_value: number;
	types: GameType[];
}

export interface GameType {
	id: number;
	type: string;
	description: string;
	range: number;
	price: number;
	maxNumber: number;
	color: string;
	isSelected?: boolean;
}
