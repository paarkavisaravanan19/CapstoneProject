import { newExpense, editExpense, deleteExpense, setExpensesError, editExpenseError, newExpenseError, deleteExpenseError } from "../app/expensesSlice";
import {toast} from 'react-toastify';

//creating toast middleware and action to next pipeline
const ToastMiddleware = () => next => action =>{
    //defining each cases
    switch(action.type)
    {
        case newExpense.type:
            toast.success('New Expense added successfully :>');
            break;
        case editExpense.type:
            toast.success('Expense edited successfully :>');
            break;
        case deleteExpense.type:
            toast.success('Expense deleted successfully :> ');
            break;
        //defining cases for error notification
        case setExpensesError.type:
            toast.error('Error loading expenses! :<');
            break;
        case editExpenseError.type:
            toast.error('Error in editing expenses! :<');
            break;
        case newExpenseError.type:
            toast.error('Error in adding new expenses! :<');
            break;
        case deleteExpenseError.type:
            toast.error('Error in deleting expenses! :<');
            break;
        default:
            break;
    }
    //next middleware in the pipeline can execute its code
    return next(action);
}

export default ToastMiddleware;