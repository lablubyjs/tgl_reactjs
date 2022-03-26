import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { gamesServices } from '@shared/services';

const { listGames } = gamesServices();

const initalGamesState: any = {
	list: [],
};

const gamesSlice = createSlice({
	name: 'games',

	initialState: initalGamesState,

	reducers: {
		addGames(state, action: PayloadAction<any>) {
			console.log('adding');
			state.list = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(asyncAddGames.fulfilled, (state, action) => {
			state.list = action.payload;
		});
	},
});

export const gamesActions = gamesSlice.actions;
export default gamesSlice.reducer;

export const asyncAddGames = createAsyncThunk(
	'games/fetchAddGames',
	async () => {
		const response = await listGames();
		return response.types;
	}
);
