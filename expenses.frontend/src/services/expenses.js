import { ActionCreator, ActionCreators } from "../app/expensesReducer";
export const GetExpenses = async (dispatch) => {
    try{
        //api call
        const expenses = [
            {id: 1, description :'Groceries', amount: 100},
            {id: 2, description :'Gas', amount: 200},
            {id: 3, description :'Student loans', amount: 10000},
            {id: 4, description :'shopping', amount: 3000},
        ];
        //importing dispatch and setting the expenses
        dispatch(ActionCreators.setExpenses(expenses));

    } catch{
        console.log('Error!')
    }
}