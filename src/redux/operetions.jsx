import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://65b92f2bb71048505a8a6162.mockapi.io/';
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const res = await axios.get('contacts');
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.massage)
    }
})
export const addContacts = createAsyncThunk('contacts/addTasks', async (text, thunkAPI) => {
    try {
        const res = await axios.post('contacts', text );
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.massage)
    }
})
export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async (contactId, thunkAPI) => {
    try {
        const res = await axios.delete(`contacts/${contactId}`);
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.massage)
    }
})