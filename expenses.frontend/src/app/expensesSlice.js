import {createSlice} from '@reduxjs/toolkit';

export const expensesSlice = createSlice({
    name : 'expenses',
    initialState:{
        expenses:[],
    },
    reducers:{
        //define the key and its context
        setExpenses: (state, action) => {
            return  {...state, expenses:{...action.payload}};
        }
    }
});