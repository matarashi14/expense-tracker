import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const handleSaveExpense = (e) => {
    const expenseData = {
      ...e,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };
  const [openForm, setOpenForm] = useState(false);

  const handleClick = () => {
    setOpenForm(!openForm);
  };

  return (
    <div className="new-expense">
      {openForm ? (
        <ExpenseForm onSaveExpenseData={handleSaveExpense} onCancel={handleClick}/>
      ) : (
        <button onClick={handleClick}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
