import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logOutUser, refreshUser, registerUser } from './operations';


const initialState = {
    user: {name: null, email: null},
    token:  null,
    isLoggedIn: false,
    isRefreshing: false,
    error: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:{
        
        [registerUser.fulfilled](state, action){
            
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = false;
        },
        [registerUser.rejected](state){
            state.error = true;
            state.isLoggedIn = false;
        },

        [loginUser.fulfilled](state, action){
            state.user = action.payload.user
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = false;
        },
        [loginUser.rejected](state){
            state.error = true;
            state.isLoggedIn = false;
        },

        [logOutUser.fulfilled](state){
            state.user = {name: null, email: null}
            state.token = null;
            state.isLoggedIn = false;
            state.error = false;
        },
        [logOutUser.rejected](state){
            state.error = true;
            state.isLoggedIn = true;
        },


        [refreshUser.pending](state){
            state.isRefreshing = true;
        },

        [refreshUser.fulfilled](state, action){
            state.user = action?.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },

        [refreshUser.rejected](state){
            state.isRefreshing = false;
        },


    }
});


export const authSliceReduser = authSlice.reducer