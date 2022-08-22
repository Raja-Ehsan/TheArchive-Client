import {configureStore} from '@reduxjs/toolkit' 
import reducers from "./reducers/index"

import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'persist-key',
    storage
}

const persistedReducer=persistReducer(persistConfig,reducers)

const store =configureStore({
    reducer:{reducers:persistedReducer},
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    
});

const persistor=persistStore(store)

export default store;

export {persistor}