import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authApi } from '../server/authFetch';
import { personApi } from 'server/lordFetch';
import { chatApi } from 'server/chatFetch';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { curentUser, curentToken } from './AuthSlise';
import { nikName } from './NikSlise';
import { language } from './LanguageSlise';
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

// ***********************local*************************
const tokenPersistConfig = {
  key: 'worldFuture-token', //это ключь под которым мы сохраняем сторе
  storage,
  whitelist: ['token', 'language'], // этот ключь вытягивает уже из slice
};

// *****************reduser*************************************
const rootReduser = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [personApi.reducerPath]: personApi.reducer,
  [chatApi.reducerPath]: chatApi.reducer,
  token: curentToken.reducer,
  auth: curentUser.reducer,
  nikName: nikName.reducer,
  language: language.reducer,
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
    })
      .concat(authApi.middleware)
      .concat(personApi.middleware)
      .concat(chatApi.middleware),
});

export const persistor = persistStore(store);
