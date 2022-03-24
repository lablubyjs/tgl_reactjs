import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginResponse } from '@shared/interfaces';

const initialUserState: ILoginResponse = {
	user: {
		id: 0,
		email: '',
		isAdmin: 0,
		name: '',
		token: null,
		tokenCreatedAt: null,
		createdAt: 'new Date(2021, 1, 10)',
		updatedAt: 'new Date(2021, 2, 10)',
		picture: null,
	},
	token: {
		type: '',
		token: localStorage.getItem('token')!,
		expiresAt: 'new Date(2021, 3, 10)',
	},
};

const userSlice = createSlice({
	name: 'user',

	initialState: initialUserState,

	reducers: {
		addUser(state, action: PayloadAction<ILoginResponse>) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			localStorage.setItem('token', action.payload.token.token);
		},

		removeUser(state) {
			state = initialUserState;
			localStorage.removeItem('token');
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
