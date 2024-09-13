import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { baseApi } from "./api/baseApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { useMemo } from 'react';
// import rootReducer from './rootReducer';

// let store;

// function initStore(initialState) {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState: initialState,
//   });
// }

// export const initializeStore = (preloadedState) => {
//   let _store = store ?? initStore(preloadedState);

//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     });
//     store = undefined;
//   }

//   if (typeof window === 'undefined') return _store;
//   if (!store) store = _store;

//   return _store;
// };

// export const useStore = (initialState) => {
//   return useMemo(() => initializeStore(initialState), [initialState]);
// };
