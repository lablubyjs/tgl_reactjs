import { configureStore } from '@reduxjs/toolkit';
import betsSlice from './bets-slice';
import gamesSlice from './games-slice';
import userSlice from './user-slice';

const store = configureStore({
   reducer: {
      user: userSlice,
      bets: betsSlice,
      games: gamesSlice
   }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch