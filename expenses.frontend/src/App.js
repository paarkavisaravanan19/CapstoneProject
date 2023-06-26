import { ToastContainer } from "react-bootstrap";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { ToastContainer } from "react-toastify";

//visualizing the toast notification
const App =() =>(
<div style={{width: '60%', margin : 'auto'}}>
  <ToastContainer/>
  <h3>New Expense</h3>
  <ExpenseForm/>
  <hr style={{border:'1px solid grey'}}/>
  <h3>Your Expenses</h3>
  <ExpenseList/>

</div>
);

export default App;
