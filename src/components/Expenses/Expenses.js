import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const handleSelectYear = (e) => {
    setFilterYear(e);
  };
  const filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={handleSelectYear} selected={filterYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
