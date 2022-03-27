import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameType } from '@shared/interfaces';
import { gamesServices } from '@shared/services';

const { listGames } = gamesServices();

type GamesSlice = {
	list: GameType[];
};

const initalGamesState: GamesSlice = {
	list: [],
};

const gamesSlice = createSlice({
	name: 'games',

	initialState: initalGamesState,

	reducers: {
		addGames(state, action: PayloadAction<any>) {
			state.list = action.payload;
		},

		selectGame(state, action: PayloadAction<number>) {
			state.list.map((game) => {
				if (game.id === action.payload) {
					game.isSelected = !game.isSelected;
				}
			});
		},
	},

	extraReducers: (builder) => {
		builder.addCase(asyncAddGames.fulfilled, (state, action) => {
			state.list = action.payload;
		});
	},
});

export const { addGames, selectGame } = gamesSlice.actions;
export default gamesSlice.reducer;

export const asyncAddGames = createAsyncThunk(
	'games/fetchAddGames',
	async () => {
		const response = await listGames();
		return response.types;
	}
);
