import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
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
// апи и слайсы
import { WS_BASE_API } from './WebSocketsAPI/WS_BASE_API';
import { API_BASE_SERVER } from './ServerAPI/API_BASE_SERVER';
import { auth } from './Slises/AuthSlise';
import { lordInfo } from './Slises/myLordInfo';
import { language } from './Slises/LanguageSlise';
import { chatGame } from './Slises/chatGame';
import { planetaBlueHomeInfo } from './Slises/planetaBlueHomeInfo';
import { planetaYellowHomeInfo } from './Slises/planetaYellowHomeInfo';
import { planetaLostWorldInfo } from './Slises/planetaLostWorldInfo';
import { errorUser } from './Slises/errorUser';

// ***********************local*************************
const tokenPersistConfig = {
  key: 'worldFuture', //это ключь под которым мы сохраняем сторе
  storage,
  whitelist: ['auth', 'language'], // этот ключь вытягивает уже из slice
};

// *****************reduser*************************************
const rootReduser = combineReducers({
  [API_BASE_SERVER.reducerPath]: API_BASE_SERVER.reducer,
  [WS_BASE_API.reducerPath]: WS_BASE_API.reducer,
  auth: auth.reducer,
  lordInfo: lordInfo.reducer,
  chatGame: chatGame.reducer,
  language: language.reducer,
  planetaYellowHomeInfo: planetaYellowHomeInfo.reducer,
  planetaLostWorldInfo: planetaLostWorldInfo.reducer,
  planetaBlueHomeInfo: planetaBlueHomeInfo.reducer,
  errorUser: errorUser.reducer,
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
