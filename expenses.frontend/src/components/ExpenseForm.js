import { Button } from "react-bootstrap";
import{Form, Row, Col} from "react-bootstrap";
import {React, useEffect, useState} from "react";
import { NewExpense } from "../services/expenses";
import { useDispatch } from "react-redux";

export default () => {
    const descriptions =['Groceries', 'Credit Card', 'Student Loan', 'Eating Out', 'Gas'];
    //setAmount function calling
    const [amount, setAmount] = useState(0);
    //setDescription function calling
    const [ description, setDescription] = useState(descriptions[0]);
    const [isNewExpense, setIsNewExpense] = useState(true);
    const dispatch=useDispatch();
    return <Form
    onSubmit={
        event=> {event.preventDefault();
        if(isNewExpense){
            //create new expense
            NewExpense(dispatch, {description: description, amount:amount});
        }
        else{
            //edit expense
        }
    }}>
        <Row>
            <Col>
            <Form.Label>Description</Form.Label>
            <Form.Control as='select'
            onChange={event=> setDescription(event.target.value)}>
                {descriptions.map(d=> <option>{d}</option>)}
            </Form.Control>
            </Col>
            <Col>
            <Form.Label>Amount</Form.Label>
            <Form.Control type='number' step='0.01'
            placeholder={amount}
            onChange={event=> setAmount(event.target.value)}/>
            </Col>
            <div style={{marginTop:'auto'}}>
                {isNewExpense
                ? <Button variant='primary' type='submit'>Add</Button>
                : <div>
                    <Button variant='danger'>delete</Button>
                    <Button variant='sucess' type='submit'>save</Button>
                    <Button variant='default'>cancel</Button>
                    </div>
            }
            </div>
        </Row>
    </Form>
}