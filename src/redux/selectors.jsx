import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.filters;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;

export const visibleContacts = createSelector([selectContacts, selectFilter ], (contacts, filterValue)=>{
  return  contacts.filter((contact )=>{
            return  contact.name.toLowerCase().includes(filterValue)
          })
}) 