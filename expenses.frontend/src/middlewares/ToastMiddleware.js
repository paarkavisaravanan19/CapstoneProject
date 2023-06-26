import { newExpense, editExpense, deleteExpense } from "../app/expensesSlice";
import {toast} from 'react-toastify';

//creating toast middleware and action to next pipeline
const ToastMiddleware = () => next => action =>{
    //defining each cases
    switch(action.type)
    {
        case newExpense.type:
            toast.success('New Expense added successfully');
            break;
        case editExpense.type:
            toast.success('Expense edited successfully');
            break;
        case deleteExpense.type:
            toast.success('Expense deleted successfully');
            break;
        default:
            break;
    }
    //next middleware in the pipeline can execute its code
    return next(action);
}

export default ToastMiddleware;