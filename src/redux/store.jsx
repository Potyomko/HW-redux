import { combineReducers, legacy_createStore as createStore } from "@reduxjs/toolkit"
 import { persistStore, persistReducer } from 'redux-persist';
 import storage from 'redux-persist/lib/storage';
import { contactsReducer, filtersReducer } from "./slices"

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)

export const persistor = persistStore(store)