import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./features/tableSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { icapApi } from "./features/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";

export const store = configureStore({
  reducer: {
    table: tableReducer,
    [icapApi.reducerPath]: icapApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(icapApi.middleware),
});

// optional, required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
