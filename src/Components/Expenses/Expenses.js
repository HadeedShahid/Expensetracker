import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) =>{
      setFilteredYear(year)
      console.log("Expenses",year)

    }

    const filteredExpenses = props.expenses.filter(expense=>{
      return expense.date.getFullYear().toString() === filteredYear;
    })

    return(
      <div>
      <Card className='expenses'>
      <ExpensesFilter selectedYear = {filteredYear} onChangeFilter = {filterChangeHandler}></ExpensesFilter>
      <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
      <ExpensesList items = {filteredExpenses}></ExpensesList>
      </Card>
      </div>
    );
}
export default Expenses 