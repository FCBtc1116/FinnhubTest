import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fetchReducer from '../features/main/fetchSlice';

export const store = configureStore({
  reducer: {
    fetchData: fetchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
