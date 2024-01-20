import { createSlice } from "@reduxjs/toolkit";

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
      state.push({ id, name, number });
    },
    deleteContact: (state, action) => {
      const contactIdToDelete = action.payload;
      return state.filter(contact => contact.id !== contactIdToDelete);
    },
    filterContactsByName: (state, action) => {
      const filterText = action.payload.toLowerCase();
      return state.filter(contact => contact.name.toLowerCase().includes(filterText));
    },
  },
});

export const { addContact, deleteContact, filterContactsByName } = contactsSlice.actions;
export const contactsReducer =  contactsSlice.reducer;