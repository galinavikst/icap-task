import { configureStore } from "@reduxjs/toolkit";
import addBookSlice from "./features/addBookSlice";
import searchReducer from "./features/searchSlice";
import tableReducer from "./features/tableSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { productApi } from "./features/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";

export const store = configureStore({
  reducer: {
    addBook: addBookSlice,
    search: searchReducer,
    table: tableReducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
