import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  
};

// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};


export const registerUser  = createAsyncThunk(
    'auth/register',
    async (userDetails,thunkAPI)  =>{
       
        try {
            const resp = await axios.post('/users/signup',userDetails);
            setAuthHeader(resp.data.token);
            
            return resp.data
        } catch (e) {
            console.log(e.message)
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/login',
    async (userDetails,thunkAPI) => {
        try {
            const resp = await axios.post('/users/login',userDetails);
            setAuthHeader(resp.data.token);

            return resp.data
        } catch (e) {
            console.log(e.message)
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const logOutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            
            await axios.post('/users/logout');
            clearAuthHeader();

        } catch (e) {
            console.log(e.message)
            return thunkAPI.rejectWithValue(e.message);
        }
      
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_,thunkAPI) => {
        const state = thunkAPI.getState()
        const token = state.auth.token;
        
        if (token === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        };
            
        try {
            setAuthHeader(token);
            const resp = await axios.get('/users/current');
            console.log(resp.data)
            return resp.data;
        } catch (e) {
            console.log(e.message)
            return thunkAPI.rejectWithValue(e.message);
        }
      
    }
    
);


// export const getUsers = async () => {

//    const resp = await axios.get('/users');
//    console.log('resp', resp)
//    return resp
  
// }



