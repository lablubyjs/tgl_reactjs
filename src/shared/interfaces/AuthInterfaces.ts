export interface IBodyAuth {
	email?: string;
	password?: string;
}

export interface ILoginResponse {
	user: User;
	token: Token;
}

interface Token {
	type: string;
	token: string;
	expiresAt: string;
}

interface User {
	id: number;
	email: string;
	isAdmin: number;
	name: string;
	token: null;
	tokenCreatedAt: null;
	createdAt: string;
	updatedAt: string;
	picture: null;
}

export interface IResetResponse {
	id: number;
	email: string;
	isAdmin: number;
	name: string;
	token: string;
	tokenCreatedAt: string;
	createdAt: string;
	updatedAt: string;
}

export interface IChangeResponse {
	id: number;
	email: string;
	is_admin: number;
	name: string;
	created_at: string;
	updated_at: string;
}
