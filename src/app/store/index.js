import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import loadingReducer, { startLoading, stopLoading } from "./loading.slice";
import authReducer from "modules/auth/slice.auth";
import itsdReducer from "modules/itsd/slice.itsd";
import commonReducer from "modules/common/slice.common";

const loadingMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type.endsWith("/pending")) {
    storeAPI.dispatch(startLoading());
  } else if (
    action.type.endsWith("/fulfilled") ||
    action.type.endsWith("/rejected")
  ) {
    storeAPI.dispatch(stopLoading());
  }
  return next(action);
};

const rootReducer = combineReducers({
  app: loadingReducer,
  auth: authReducer,
  itsd: itsdReducer,
  common: commonReducer
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(loadingMiddleware),
});

export const persistor = persistStore(store);
