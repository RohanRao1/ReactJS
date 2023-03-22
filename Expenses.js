import React, { useState } from "react";
//import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  //console.log("this is expense.js");
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {filteredExpenses.length === 0 ? <p>no expenses</p> : filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date = {expense.date} />
      ))} */}
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses; 


/* {filteredExpenses.length === 0 ? (
        <p>No Items Found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      // )} */
/*either we can use this condition or we can use outside condition */
