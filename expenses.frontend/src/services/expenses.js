import {  setExpenses, newExpense, editExpense, deleteExpense , setExpensesError, editExpenseError, newExpenseError,
deleteExpenseError} from "../app/expensesSlice";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/Expenses`,
})

axiosInstance.interceptors.request.use(config=>
    {
        config.headers = { authorization : 'Bearer ' + sessionStorage.getItem('token')};
        return config;
    })

export const GetExpenses = async (dispatch) => {
    try{
        //api call
        const { data } = await axiosInstance.get();
        //importing dispatch and setting data from api
        dispatch(setExpenses(data));

    } catch{
        dispatch(setExpensesError());
    }
}

//to dispatch the newexpense
export const NewExpense = async (dispatch, expense) => {
    try{
        //api call
        const {data} = await axiosInstance.post('',expense);
        dispatch(newExpense(data));
    } catch{
        dispatch(newExpenseError());
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
        dispatch(editExpenseError());
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
        dispatch(deleteExpenseError());
    }
}