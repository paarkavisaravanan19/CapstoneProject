const initialState = {
    expenses:[],
}
//action to set expenses
export const ActionTypes = {
    SET_EXPENSES :'SET_EXPENSES',
}

export const ActionCreators ={
    setExpenses : payload => ({type: ActionTypes.SET_EXPENSES, payload}),
}

export default (state= initialState, action) => {
    switch(action.type)
    {
        //performs while setting the expenses
        case ActionTypes.SET_EXPENSES:
            //payload==> to dispatch the action
            return{...state, expenses:[...action.payload]};
        default:
            return state;
    }
}