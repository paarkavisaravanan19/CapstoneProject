import {React, useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { GetExpenses } from '../services/expenses';
import { Row, Col } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import ExpenseForm from './ExpenseForm';

export default() =>
{
    //react hooks
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expensesSlice.expenses);
    //non hooks
    useEffect(()=>
    {
        GetExpenses(dispatch);
    },
    []);
    return expenses.map(e=>
        <div key={e.id} style={{marginBottom:'1rem'}}>
            <ListRow expense={e} />
        </div>
        );
}

const ListRow = ({expense}) => {
    const [isEditing , setIsEditing]= useState(false);

    return isEditing
    ?
    <ExpenseForm expense ={expense} setIsEditing ={setIsEditing}/>
    :
    <div>
        <Row>
            <Col>{expense.description}</Col>
            <Col>₹ {expense.amount}</Col>
            <Button variant='warning' onClick={()=> setIsEditing(!isEditing)}>Edit</Button>
        </Row>
        <hr/>
    </div>
}