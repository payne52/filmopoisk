import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { itemsReducer } from "../reducers/itemsReducer";

export const store = configureStore({
  reducer: { itemsState: itemsReducer },
});

export type StoreState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
