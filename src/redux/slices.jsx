import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts} from "./operetions";

const filtersSlice = createSlice({
  name: "filters",
  initialState: '',
  reducers: {
    filterContactsByName(state, action){
      return state = action.payload.trim();
    },
  }
})
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload
      })
      .addCase(addContacts.fulfilled, (state, action) => {
      state.contacts.push(action.payload)
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        const idx = state.contacts.findIndex((contact) => contact.id === action.payload.id)
        state.contacts.splice(idx, 1);
      })
      .addMatcher(isAnyOf(fetchContacts.pending, addContacts.pending, deleteContacts.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchContacts.rejected, addContacts.rejected, deleteContacts.rejected), (state, action) => {
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(fetchContacts.fulfilled, addContacts.fulfilled, deleteContacts.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;
    })
  }
})
export const { filterContactsByName } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const filtersReducer =  filtersSlice.reducer;