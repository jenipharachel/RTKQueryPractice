import {todoSlice} from './slices/todoSlice';
import {todoApi} from '../apis/todoApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

const reducers = combineReducers({
  todo: todoSlice,
  // notification: notificationSlice,
  // profile: profileSlice,
  // loader: loaderSlice,
  // appointment: appointmentSlice,
  // inspectionForm: inspectionFormSlice,
  [todoApi.reducerPath]: todoApi.reducer,
  // [authApi.reducerPath]: authApi.reducer,
  // [appointmentApi.reducerPath]: appointmentApi.reducer,
  // [presignedUrlApi.reducerPath]: presignedUrlApi.reducer,
  // [firebaseApi.reducerPath]: firebaseApi.reducer,
  // [appVersionApi.reducerPath]: appVersionApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(todoApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
