import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { API_BASE_SERVER } from './ServerAPI/API_BASE_SERVER';
import { WS_BASE_API } from './WebSocketsAPI/WS_BASE_API';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { curentUser, curentToken } from './Slises/AuthSlise';
import { nikName } from './Slises/NikSlise';
import { language } from './Slises/LanguageSlise';
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
  [API_BASE_SERVER.reducerPath]: API_BASE_SERVER.reducer,
  [WS_BASE_API.reducerPath]: WS_BASE_API.reducer,
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
      .concat(API_BASE_SERVER.middleware)
      .concat(WS_BASE_API.middleware),
});

export const persistor = persistStore(store);
