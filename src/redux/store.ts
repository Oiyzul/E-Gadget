import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { baseApi } from "./api/baseApi";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  cart: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

export const makeStore = () => {
  return store;
};

export const persistor = persistStore(store);
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
