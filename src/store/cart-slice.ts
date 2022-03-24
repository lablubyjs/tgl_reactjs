import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart, IGame } from '@shared/interfaces';

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
		},

		removeToCart(state, action: PayloadAction<{ id: number; price: number }>) {
			state.games.filter((game) => game.gameID !== action.payload.id);
			state.cartTotal -= action.payload.price;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
