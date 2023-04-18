import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./state/authSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import { userSlice } from "./state/userSlice";
import { providersSlice } from "./state/providersSlice";
import { providerSlice } from "./state/providerSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["provider,providers"]
};

const persistedReducer = persistCombineReducers(persistConfig, {
  auth: authSlice,
  user: userSlice.reducer,
  provider: providerSlice.reducer,
  providers: providersSlice.reducer
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
