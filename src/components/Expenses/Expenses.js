import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020')
  
  const filterChangeHandler = selectedYear => {
    console.log('Expenses.js')
    console.log(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
        {props.expenses.map((expense, index) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={index}
            ></ExpenseItem>
          );
        })}
      </Card>
    </div>
  );
}
