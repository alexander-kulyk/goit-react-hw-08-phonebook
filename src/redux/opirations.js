import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//import { fetchingError, fetchingInProgress, fetchingSuccess } from "./phoneBookSlice";

//axios.defaults.baseURL = 'https://63a8903f100b7737b981b3c9.mockapi.io/contacts'
//axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI)=>{

        try {
            const resp = await axios.get('/contacts');
            const data = resp.data
            
            const sortByName = data.sort((a,b)=>a.name.localeCompare(b.name))
            return sortByName

        } catch (e) {
            console.log(e.message)
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async(contact, thunkAPI) =>{

        try {
            const resp = await axios.post('/contacts',contact);
            return resp.data
        } catch (e) {
            console.log(e.message)
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)


export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI)=>{
        
        try {
            const resp = await axios.delete(`contacts/${contactId}`);
            return resp.data
        } catch (e) {
            console.log(e.message)
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


// export const fetchContacts = () => async dispatch =>{
//     try {
//         dispatch(fetchingInProgress());
//         const resp = await axios.get('/contacts');
//         dispatch(fetchingSuccess(resp.data))

        
//     } catch (e) {
//         dispatch(fetchingError(e.message))
//     }
// }

// export const addContact = newContact => async dispatch =>{
    
//     try {

//         const response = await axios.post("/contacts", newContact );
//         return  response
        
//     } catch (error) {
        
//     }
    
// }
