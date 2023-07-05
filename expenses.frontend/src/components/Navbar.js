import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {Nav, Button} from 'react-bootstrap';
import {logout} from '../app/authenticationSlice';

//navbar for routing
const Navbar =() =>
{
    const {isLoggedIn} = useSelector(state => state.authenticationSlice);
    const dispatch = useDispatch();

    return <Nav className ='navbar' style={{backgroundColor:'#e4fff2'}}>
        <h1 style={{fontFamily: 'Brush Script MT, cursive'}}>My Expenses</h1>
        {
            isLoggedIn
            ?
            <div style={{display:'flex', alignItems:'center'}}>
                <NavLink style={{marginLeft:'1rem', fontFamily:'Times New Roman', fontSize: '25px'}} variant='link' to='/'>Home</NavLink> 
                <NavLink style={{marginLeft:'1rem', fontFamily:'Times New Roman',fontSize: '25px'}} variant='link' to='/statistics'>Statistics</NavLink>
            <Button variant='link' href='/signin' onClick={()=> dispatch(logout())} style={{fontFamily: 'Times New Roman', fontSize: '25px'}}>Logout</Button>
            </div>
            : <div style={{display: 'flex'}}>
                <NavLink style={{fontFamily:'Times New Roman', fontSize: '25px'}} to='/signup'>Sign up</NavLink>
                <NavLink to='/signin' style={{marginLeft:'1rem', fontFamily:'Times New Roman', fontSize: '25px'}}>Sign in</NavLink>
            </div>
        }

    </Nav>
}
export default Navbar;