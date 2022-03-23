export interface IBodyUser {
	email: string;
	password: string;
	name: string;
}

export interface ICreateUserResponse {
	user: User;
	token: Token;
}
export interface Token {
	type: string;
	token: string;
	expiresAt: Date;
}

export interface User {
	email: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	id: number;
}
