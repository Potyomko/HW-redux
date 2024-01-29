import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: '',
  reducers: {
    filterContactsByName:(state, action)=> {
      const filterText = action.payload.toLowerCase();
      return state.filter(contact => contact.name.toLowerCase().includes(filterText));
    },
  }
})
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload;
      console.log(state);
      state.contacts.push({id, name, number});
    },
    deleteContact: (state, action)=> {
      return state.contacts.filter(contact => contact.id !== action.payload);
    },
  }
})
export const { addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const {filterContactsByName} = filtersSlice.actions;
export const filtersReducer =  contactsSlice.reducer;