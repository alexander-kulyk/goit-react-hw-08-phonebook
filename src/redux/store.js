import { configureStore } from '@reduxjs/toolkit'
import {  persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterContactsSlice from './filterContactsSlice'
import  { phoneBookReduser } from './phoneBookSlice';
import { authSliceReduser } from './auth/slice';

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'



const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};



export const store = configureStore({
    reducer:{
        auth: persistReducer(authPersistConfig, authSliceReduser),
        contacts: phoneBookReduser ,
        filter: filterContactsSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);