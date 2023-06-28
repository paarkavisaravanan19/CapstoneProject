import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./components/HomePage";
import { useEffect } from "react";
import { userAuthenticated } from "./app/authenticationSlice";
import Navbar  from "./components/Navbar";

//visualizing the toast notification
const App =() =>
{
  const { isLoggedIn } = useSelector(state => state.authenticationSlice);
  const dispatch = useDispatch();

//session storage for authorized user => to retain in the same page with getting expired
  useEffect(()=>
  {
    const token = sessionStorage.getItem('token');
    if(token !== undefined && token!== null)
    {
      dispatch(userAuthenticated({token}));
    }
  },
  []);

  //routing the pages based on condition
  return <BrowserRouter>
  <Navbar/>
  <Switch>
    <Route exact path = '/' render={()=> (isLoggedIn? <HomePage /> : <SignInPage/>)}/>
    <Route path = '/signup' render={()=>(isLoggedIn? <Redirect to='/' /> : <SignUpPage/>)}/>
    <Route path = '/signin' render={()=>(isLoggedIn? <Redirect to='/' /> : <SignInPage/>)}/>
    <Route component={() => <h2>Page not found!</h2>}/>
  </Switch>
  </BrowserRouter>
}

export default App;
