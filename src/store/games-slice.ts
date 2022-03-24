import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListGamesReponse } from '@shared/interfaces';

const initialGamesState: IListGamesReponse['types'] = [];

const gamesSlice = createSlice({
	name: 'games',

	initialState: initialGamesState,

	reducers: {
		addGames(state, action: PayloadAction<IListGamesReponse['types']>) {
			state = action.payload;
		},
	},
});

export const gamesActions = gamesSlice.actions;

export default gamesSlice.reducer;
