import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
// апи и слайсы
import { WS_BASE_API } from './WebSocketsAPI/WS_BASE_API'
import { API_BASE_SERVER } from './ServerAPI/API_BASE_SERVER'
import { auth } from './Slices/AuthSlice'
import { lordInfo } from './Slices/lordInfoSlice'
import { language } from './Slices/LanguageSlice'
import { chatGame } from './Slices/chatGameSlice'
import { openCanvasModal } from './Slices/openCanvasModalSlice'
import { BlueHomeInfo } from './Slices/planetBlueHomeInfoSlice'
import { YellowHomeInfo } from './Slices/planetYellowHomeInfoSlice'
import { LostWorldInfo } from './Slices/planetLostWorldInfoSlice'
import { errorUser } from './Slices/errorUserSlice'
import { statusWS } from './Slices/statusWS'
import { myPosition } from './Slices/myPositionSlice'

// ***********************local*************************
const tokenPersistConfig = {
  key: 'worldFuture', // это ключь под которым мы сохраняем сторе
  storage,
  whitelist: ['auth', 'language'] // этот ключь вытягивает уже из slice
}

// *****************reduser*************************************
const rootReduser = combineReducers({
  [API_BASE_SERVER.reducerPath]: API_BASE_SERVER.reducer,
  [WS_BASE_API.reducerPath]: WS_BASE_API.reducer,
  auth: auth.reducer,
  lordInfo: lordInfo.reducer,
  chatGame: chatGame.reducer,
  language: language.reducer,
  YellowHomeInfo: YellowHomeInfo.reducer,
  LostWorldInfo: LostWorldInfo.reducer,
  BlueHomeInfo: BlueHomeInfo.reducer,
  myPosition: myPosition.reducer,
  openCanvasModal: openCanvasModal.reducer,
  statusWS: statusWS.reducer,
  errorUser: errorUser.reducer
})
const persistedReducer = persistReducer(tokenPersistConfig, rootReduser)

// ****************store*********************************
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
      .concat(API_BASE_SERVER.middleware)
      .concat(WS_BASE_API.middleware)
})

export const persistor = persistStore(store)
