import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { ToastContainer } from "react-toastify";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./components/HomePage";


//visualizing the toast notification
const App =() =>
{
  const {isLoggedIn} = useSelector(state => state.authenticationSlice);
  //routing the pages based on condition
  return 
  <BrowserRouter>
  <Switch>
    <Route exact path = '/' render={()=> (isLoggedIn? <HomePage/> : <SignInPage/>)}/>
    <Route path = '/signup' render={()=>(isLoggedIn? <Redirect to='/' /> : <SignUpPage/>)}/>
    <Route path = '/signin' render={()=>(isLoggedIn? <Redirect to='/' /> : <SignInPage/>)}/>
  </Switch>
  </BrowserRouter>
}

export default App;
