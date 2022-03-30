import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILoginResponse } from '@shared/interfaces';
import { userServices } from '@shared/services/index';

const {myAccount} = userServices()

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
	}
};

const userSlice = createSlice({
	name: 'user',

	initialState: initialUserState,

	reducers: {
		addUser(state, action: PayloadAction<ILoginResponse>) {
			state = action.payload;
		},

		removeUser(state) {
			state = initialUserState;
			localStorage.removeItem('token');
		},
	},

	extraReducers: (builder) => {
		builder.addCase(
			asyncAddUser.fulfilled,
			(state, action) => {
				state.user = action.payload;
				console.log('adding user', action.payload)
				console.log(state)
			}
		);
	},
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

export const asyncAddUser = createAsyncThunk(
	'user/fetchAddUser',
	async () => {
		const response = await myAccount()
		return response;
	}
);
