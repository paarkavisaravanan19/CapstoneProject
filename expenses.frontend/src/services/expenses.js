import {  setExpenses, newExpense, editExpense, deleteExpense } from "../app/expensesSlice";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7157/Expenses',
})

export const GetExpenses = async (dispatch) => {
    try{
        //api call
        const { data } = await axiosInstance.get();
        //importing dispatch and setting data from api
        dispatch(setExpenses(data));

    } catch{
        console.log('Error!')
    }
}

//to dispatch the newexpense
export const NewExpense = async (dispatch, expense) => {
    try{
        //api call
        const {data} = await axiosInstance.post('',expense);
        dispatch(newExpense(data));
    } catch{
        console.log('Error!');
    }
}

//editing expenses
export const EditExpense = async(dispatch, expense)=>
{
    try{
        //api call
        await axiosInstance.put('',expense);
        dispatch(editExpense(expense));
    }catch{
        console.log('Error!');
    }
}

//delete expense
export const DeleteExpense = async(dispatch, expense)=>
{
    try{
        //api call
        await axiosInstance.delete('',{data: {...expense}});
        dispatch(deleteExpense(expense));
    }
    catch{
        console.log('Error!');
    }
}