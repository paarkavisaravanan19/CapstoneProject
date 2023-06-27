import { useState } from "react";
import { Form, Button, FormControl,InputGroup } from "react-bootstrap";
import { SignUp } from '../services/authentication';
import {useDispatch}  from 'react-redux';


const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setemail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    return <div style={{width: '30rem', margin: 'auto',paddingTop:'8px'}}>
        <Form onSubmit={event=>
            {
                event.preventDefault();
                //authentication dispatched
                SignUp( dispatch , {username, email, password});
            }
        }>
            <h4 style={{textAlign: 'center'}}>Welcome back</h4>
            <InputGroup className="mb-3">
                <FormControl placeholder='Username' onChange={event => setUsername(event.target.value)}></FormControl>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl placeholder='Email' onChange={event => setemail(event.target.value)}></FormControl>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl placeholder='Password' type='password' onChange={event => setPassword(event.target.value)}></FormControl>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl placeholder='Confirm Password' type='password' onChange={event => setConfirmPassword(event.target.value)}></FormControl>
            </InputGroup>
            <Button type='submit' variant='success' style={{margin:'auto', display:'block', width: '10rem'}}
            disabled={password !== confirmPassword  || password.length <= 0}>
                Sign Up
            </Button>
        </Form>
    </div>
}

export default SignUpPage;