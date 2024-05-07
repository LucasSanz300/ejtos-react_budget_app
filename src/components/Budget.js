
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch,remaining} = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,

        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{newBudget}</span>
<input type="number" step="10" max= "20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
