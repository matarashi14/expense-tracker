import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {

    const handleSaveExpense = (e) => {
        const expenseData = {
            ...e,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }


    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={handleSaveExpense} />
        </div>
    )
}

export default NewExpense