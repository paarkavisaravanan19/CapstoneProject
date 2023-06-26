import {createSlice} from '@reduxjs/toolkit';
import { toast }  from 'react-toastify';

export const expensesSlice = createSlice({
    name : 'expenses',
    initialState:{
        expenses:[],
    },
    reducers:{
        //define the key and its context
        setExpenses: (state, action) => {
            toast.success('this is a test');
            return  {...state, expenses:[...action.payload]};
        },
        newExpense: (state,action)=>{
            return {...state, expenses:[action.payload, ...state.expenses]}
        },
        editExpense :(state, action) => {
            const expenses = state.expenses.map(expense =>{
                if( expense.id === action.payload.id)
                {
                    expense = action.payload;
                }
                return expense;

            });
            return {...state, expenses:[...expenses]};
        },
        deleteExpense: (state, action)=>{
            const expenses = state.expenses.filter(expense =>
                expense.id !==action.payload.id);
                return {...state, expenses:[...expenses]};
        }
    }
});

//exporting the actions and reducers that returns
export const {setExpenses, newExpense, editExpense, deleteExpense} = expensesSlice.actions;

export default expensesSlice.reducer;
