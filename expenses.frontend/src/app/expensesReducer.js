const initialState = {
    expenses:[],
}
//action to set expenses
export const ActionTypes = {
    SET_EXPENSES :'SET_EXPENSES',
    NEW_EXPENSE : 'NEW_EXPENSE',
}

export const ActionCreators ={
    setExpenses : payload => ({type: ActionTypes.SET_EXPENSES, payload}),
    newExpense: payload=>({type: ActionTypes.NEW_EXPENSE, payload}),
}

export default (state= initialState, action) => {
    switch(action.type)
    {
        //performs while setting the expenses
        case ActionTypes.SET_EXPENSES:
            //payload==> to dispatch the action
            return{...state, expenses:[...action.payload]};
        case ActionTypes.NEW_EXPENSE:
            return {...state, expenses:[action.payload, ...state.expenses]};
        default:
            return state;
    }
}