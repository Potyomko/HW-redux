import {configureStore} from "@reduxjs/toolkit"
import { contactsReducer, filtersReducer } from "./slices"

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer
    }
})