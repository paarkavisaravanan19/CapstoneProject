import { createSlice }  from "@reduxjs/toolkit";

//add state for token and isLoggedIn
export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState:{
        token : '',
        isLoggedIn:false,
    },
    reducers: {
        //authenticated user are being stored via token
        userAuthenticated : (state, action) => {
            sessionStorage.setItem('token', action.payload.token);
            return {
                ...state, ...{
                    token: action.payload.token,
                    isLoggedIn: true,
                }
            }
        }
    },
    //clear the session when user logout
    logout:()=>{
        sessionStorage.clear();
    }
});
export const {userAuthenticated, logout} = authenticationSlice.actions;

export default authenticationSlice.reducer;