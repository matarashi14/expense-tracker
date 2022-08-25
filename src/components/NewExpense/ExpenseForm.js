import React, { useRef, useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // const [userInput, setUsetInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredAmount: ''
  // })

  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");

  const title = useRef();
  const amount = useRef();
  const date = useRef();

  // const handleTitleInput = (e) => {
  //   setTitle(e.target.value);
  //   // setUsetInput((prev) => {
  //   //     return { ...prev, enteredTitle: e.target.value }
  //   // })
  // };

  // const handleAmountInput = (e) => {
  //   setAmount(e.target.value);
  //   // setUsetInput((prev) => {
  //   //     return { ...prev, enteredAmount: e.target.value }
  //   // })
  // };
  // const handleDateInput = (e) => {
  //   setDate(e.target.value);
  //   // setUsetInput((prev) => {
  //   //     return { ...prev, enteredAmount: e.target.value }
  //   // })
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title.current.value,
      amount: +amount.current.value,
      date: new Date(date.current.value),
    };

    props.onSaveExpenseData(expenseData);
    // setTitle("");
    // setAmount("");
    // setDate("");
    props.onCancel();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    props.onCancel();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name=""
            id=""
            // onChange={handleTitleInput}
            // value={title}
            ref={title}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name=""
            id=""
            ref={amount}
            // onChange={handleAmountInput}
            // value={amount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name=""
            id=""
            ref={date}
            // onChange={handleDateInput}
            // value={date}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={handleCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
