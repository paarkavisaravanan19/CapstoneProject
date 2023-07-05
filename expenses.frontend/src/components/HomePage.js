import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { ToastContainer } from "react-toastify";
import image from '../images/homepic.png';

const HomePage = () => (
    <div style={{width: '60%', margin : 'auto'}}>
  <ToastContainer/>
  <h3 style={{fontFamily: 'Times New Roman'}}>Create your Expenses</h3>
  <ExpenseForm/>
  <hr style={{border:'1px solid grey'}}/>
  <h3 style={{fontFamily: 'Times New Roman'}}>Created Expenses</h3>
  <ExpenseList/>
  <img src={image} style={{height : "280px", width: "300px", position: 'absolute',
right: '0px',
bottom: '0px' }} alt="Description of the image" />
</div>


);

export default HomePage;