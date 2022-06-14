import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authApi } from '../server/authFetch';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { curentUser, curentToken } from './sliceAuth';

// ***********************local*************************
const tokenPersistConfig = {
  key: 'worldFuture-token', //это ключь под которым мы сохраняем сторе
  storage,
  whitelist: ['token'], // этот ключь вытягивает уже из slice
};

// *****************reduser*************************************
const rootReduser = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  token: curentToken.reducer,
  user: curentUser.reducer,
});
const persistedReducer = persistReducer(tokenPersistConfig, rootReduser);

// ****************store*********************************
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware),
});

export const persistor = persistStore(store);
