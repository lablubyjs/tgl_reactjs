import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameType } from '@shared/interfaces';
import { gamesServices } from '@shared/services';

const { listGames } = gamesServices();

type GamesSlice = {
	list: GameType[];
	currentGame: GameType;
};

const initalGamesState: GamesSlice = {
	list: [],
	currentGame: {
		id: 0,
		type: '',
		description: '',
		range: 0,
		price: 0,
		max_number: 0,
		color: '',
		isSelected: false,
	},
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

		selectedGame(state, action: PayloadAction<number>) {
			state.list.map((game) => {
				if (game.id === action.payload) {
					game.isSelected = true;
					state.currentGame = game;
				} else {
					game.isSelected = false;
				}
			});
		},
	},

	extraReducers: (builder) => {
		builder.addCase(asyncAddGames.fulfilled, (state, action) => {
			state.list = action.payload;
			state.currentGame = action.payload[0];
		});
	},
});

export const { addGames, selectGame, selectedGame } = gamesSlice.actions;
export default gamesSlice.reducer;

export const asyncAddGames = createAsyncThunk(
	'games/fetchAddGames',
	async () => {
		const response = await listGames();
		return response.types;
	}
);
