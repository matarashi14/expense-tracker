import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    // const [userInput, setUsetInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredAmount: ''
    // })

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    const handleTitleInput = (e) => {
        setTitle(e.target.value)
        // setUsetInput((prev) => {
        //     return { ...prev, enteredTitle: e.target.value }
        // })
    }

    const handleAmountInput = (e) => {
        setAmount(e.target.value)
        // setUsetInput((prev) => {
        //     return { ...prev, enteredAmount: e.target.value }
        // })
    }
    const handleDateInput = (e) => {
        setDate(e.target.value)
        // setUsetInput((prev) => {
        //     return { ...prev, enteredAmount: e.target.value }
        // })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        props.onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }


    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" name="" id="" onChange={handleTitleInput} value={title} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min='0.01' step='0.01' name="" id="" onChange={handleAmountInput} value={amount} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' name="" id="" onChange={handleDateInput} value={date} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm