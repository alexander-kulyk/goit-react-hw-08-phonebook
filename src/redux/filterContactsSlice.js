import { createSlice } from "@reduxjs/toolkit";




const filterContactsSlice = createSlice({
    name: 'filterContacts',
    initialState:{
        filter:'',
    },
    reducers:{
        handleFindContact(state, action){
            state.filter = action.payload
        }
    }
})

export const { handleFindContact } = filterContactsSlice.actions;
export default filterContactsSlice.reducer;