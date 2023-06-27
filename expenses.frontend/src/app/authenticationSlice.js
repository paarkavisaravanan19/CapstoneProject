import { createSlice }  from "@reduxjs/toolkit";

//add state for token and isLoggedIn
export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState:{
        token : '',
        isLoggedIn:false,
    },
})