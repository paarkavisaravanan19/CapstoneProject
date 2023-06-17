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