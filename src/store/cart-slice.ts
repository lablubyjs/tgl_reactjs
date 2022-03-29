import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart, IGame } from '@shared/interfaces';
import { gamesServices } from '@shared/services';

const { listGames } = gamesServices();

const initialCartState: ICart = {
	minCartValue: 0,
	games: [],
	cartTotal: 0,
};

const cartSlice = createSlice({
	name: 'cart',

	initialState: initialCartState,

	reducers: {
		addToCart(state, action: PayloadAction<{ game: IGame; price: number }>) {
			state.games.push(action.payload.game);
			state.cartTotal += action.payload.price;

			console.log('add to cart');
		},

		removeToCart(state, action: PayloadAction<{index: number, price: number}>) {
			state.games.splice(action.payload.index, 1);
			state.cartTotal -= action.payload.price;

			console.log(action.payload.price)
		},
	},

	extraReducers: (builder) => {
		builder.addCase(asyncAddMinCartValue.fulfilled, (state, action) => {
			state.minCartValue = action.payload;
		});
	},
});

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;

export const asyncAddMinCartValue = createAsyncThunk(
	'cart/fetchAddMinCartValue',
	async () => {
		const response = await listGames();
		return response.min_cart_value;
	}
);
