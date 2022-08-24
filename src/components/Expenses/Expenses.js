
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import { useState } from 'react'

function Expenses(props) {
    const expenses = props.expenses
    const [filterYear, setFilterYear] = useState('2020')

    const handleSelectYear = (e) => {
        setFilterYear(e);
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter onSelectYear={handleSelectYear} selected={filterYear}/>
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
            <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
            <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} />
            <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount} />
            <h1>{filterYear}</h1>
        </Card>
    )
}

export default Expenses