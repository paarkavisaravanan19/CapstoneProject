import { useState } from "react";
import { Form, Button, FormControl,InputGroup } from "react-bootstrap";
import { SignIn } from '../services/authentication';
import {useDispatch}  from 'react-redux';
import image from '../images/signin.gif';

const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const email = "";
    
    const dispatch = useDispatch();

    return <div style={{width: '30rem', margin: 'auto',paddingTop:'8px'}}>
        <Form onSubmit={event=>
            {
                event.preventDefault();
                //authentication dispatched
                SignIn( dispatch , {username, password, email});
            }
        }>
            <h4 style={{textAlign: 'center', fontFamily: 'Times New Roman', fontSize: '40px'}}>WELCOME BACK</h4>
            <InputGroup className="mb-3" style={{fontFamily: 'Times New Roman'}}>
                <FormControl placeholder='Username' onChange={event => setUsername(event.target.value)}></FormControl>
            </InputGroup>
            <InputGroup className="mb-3" style={{fontFamily: 'Times New Roman'}}>
                <FormControl placeholder='Password' type='password' onChange={event => setPassword(event.target.value)}></FormControl>
            </InputGroup>
            <Button type='submit' variant='primary' style={{ display:'block', margin:'auto', width: '10rem',fontSize: '20px', fontFamily: 'Times New Roman'}}>
                Sign In
            </Button>
        </Form>
        <img src={image} style={{height : "380px", width: "600px" }} alt="Description of the image" />

    </div>
}

export default SignInPage;