import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListBetsResponse } from '@shared/interfaces';

const initialBetsState: IListBetsResponse[] = [];

const betsSlice = createSlice({
	name: 'bets',

	initialState: initialBetsState,

	reducers: {
		addBets: (state, action: PayloadAction<IListBetsResponse[]>) => {
			state = action.payload;
		},
	},
});

export const betsActions = betsSlice.actions;

export default betsSlice.reducer