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
		createdAt: '10 06 2015',
		updatedAt: '10 06 2015',
		picture: null,
	},
	token: {
		type: '',
		token: '',
		expiresAt: '10 06 2015',
	},
};

const userSlice = createSlice({
	name: 'user',

	initialState: initialUserState,

	reducers: {
		addUser(state, action: PayloadAction<ILoginResponse>) {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},

		removeUser(state) {
			state = initialUserState;
			localStorage.removeItem('token');
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
