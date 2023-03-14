import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  // console.log('Expense item evaluated by react ')
  const [amount, setAmount] = useState(props.amount)
  
  const clickHandler = () =>{
    setTitle('updated')
    console.log(title)
  }

  const amountHandler = () => {
    setAmount(100)
    console.log(amount)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title} </h2>
        <div className="expense-item__price">Rs. {amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amountHandler}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;
