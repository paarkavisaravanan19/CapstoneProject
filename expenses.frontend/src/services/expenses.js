import {  ActionCreators } from "../app/expensesReducer";
export const GetExpenses = async (dispatch) => {
    try{
        //api call
        const expenses = [
            {id: 1, description :'Groceries', amount: 100},
            {id: 2, description :'Gas', amount: 200},
            {id: 3, description :'Student loans', amount: 100},
            {id: 4, description :'shopping', amount: 300},
        ];
        //importing dispatch and setting the expenses
        dispatch(ActionCreators.setExpenses(expenses));

    } catch{
        console.log('Error!')
    }
}

//to dispatch the newexpense
export const NewExpense = async (dispatch, expense) => {
    try{
        //api call
        dispatch(ActionCreators.newExpense({id: 10, description: expense.description,amount: expense.amount}));
    } catch{
        console.log('Error!');
    }
}

//editing expenses
export const EditExpense = async(dispatch, expense)=>
{
    try{
        //api call
        dispatch(ActionCreators.editExpense(expense));
    }catch{
        console.log('Error!');
    }
}

//delete expense
export const DeleteExpense = async(dispatch, expense)=>
{
    try{
        //api call
        dispatch(ActionCreators.deleteExpense(expense));
    }
    catch{
        console.log('Error!');
    }
}