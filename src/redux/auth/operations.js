import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Utility to add JWT
const setAuthToken = token => {
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
            setAuthToken(resp.data.token);
            
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
            setAuthToken(resp.data.token);

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
        const token = state.auth.token
        console.log('state', state)
        console.log('token', token)
        
        if (token === null) {
            return
            
        }

        try {
            setAuthToken(token);
            const resp = await axios.get('/users/current');
            return resp.data;
        } catch (e) {
            console.log(e.message)
            return thunkAPI.rejectWithValue(e.message);
        }
      
    }
    
)


