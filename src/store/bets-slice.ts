import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListBetsResponse } from '@shared/interfaces';
import { betsServices } from '@shared/services/index';

const { listBet } = betsServices();

type BetsSlice = {
	bets: IListBetsResponse;
	querys: string[];
};

const initialBetsState: any = {
	bets: [],
	querys: ['/bet/all-bets?'],
};

const betsSlice = createSlice({
	name: 'bets',

	initialState: initialBetsState,

	reducers: {
		addBets: (state, action: PayloadAction<IListBetsResponse>) => {
			state.bets = action.payload;
		},

		addQuery: (state, action: PayloadAction<string>) => {
			state.querys.push(`type%5B%5D=${action.payload}&`);
		},

		removeQuery: (state, action: PayloadAction<string>) => {
			state.querys = state.querys.filter((query: string) => {
				return query !== `type%5B%5D=${action.payload}&`;
			});
		},

		resetQuerys: (state) => {
			state.querys = ['/bet/all-bets?'];
		},
	},

	extraReducers: (builder) => {
		builder.addCase(
			asyncAddBets.fulfilled,
			(state, action: PayloadAction<IListBetsResponse>) => {
				state.bets = action.payload;
			}
		);
	},
});

export const { addBets, addQuery, removeQuery, resetQuerys } = betsSlice.actions;

export default betsSlice.reducer;

export const asyncAddBets = createAsyncThunk(
	'bets/fetchAddBets',
	async (url: string): Promise<IListBetsResponse> => {
		const response = await listBet(url);
		return response;
	}
);
