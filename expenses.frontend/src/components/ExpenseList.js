import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetExpenses } from '../services/expenses';
import { Button, Row, Col } from 'react-bootstrap';

export default() =>
{
    //react hooks
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expensesReducer.expenses);
    //non hooks
    useEffect(()=>
    {
        GetExpenses(dispatch);
    },
    []);
    return expenses.map(e=>
        <div style={{marginBottom: '1rem'}}>
            <ListRow expenses={e} />
        </div>
        );
}

const ListRow = ({expenses}) => {
    return <div>
        <Row>
            <Col>{expenses.description}</Col>
            <Col>{expenses.amount}</Col>
            <Button variant='warning'>Edit</Button>
        </Row>
        <hr/>
    </div>
}