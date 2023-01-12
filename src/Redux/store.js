import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authApi } from './Server/authFetch';
import { personApi } from 'Redux/Server/lordFetch';
import { chatApi } from 'Redux/Server/chatFetch';
import { testWsApi } from './WebSockets/WStest';
import { missionApi } from 'Redux/Server/missionFeth';
import { languageAPI } from './Server/languageFetch';
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
  [languageAPI.reducerPath]: languageAPI.reducer,
  [missionApi.reducerPath]: missionApi.reducer,
  [testWsApi.reducerPath]: testWsApi.reducer,
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
      .concat(missionApi.middleware)
      .concat(personApi.middleware)
      .concat(chatApi.middleware)
      .concat(testWsApi.middleware)
      .concat(languageAPI.middleware),
});

export const persistor = persistStore(store);
