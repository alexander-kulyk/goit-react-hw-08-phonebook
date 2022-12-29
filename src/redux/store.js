import { configureStore } from '@reduxjs/toolkit'
//import {  persistReducer, persistStore } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import filterContactsSlice from './filterContactsSlice'
import  { phoneBookReduser } from './phoneBookSlice';

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


// const persistConfig = {
//     key: 'contacts',
//     storage,
// };
//const persistedContactsReducer = persistReducer(persistConfig, phoneBookSlice)


export const store = configureStore({
    reducer:{
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

//export const persistor = persistStore(store);