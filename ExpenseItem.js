import Card from "../UI/Card";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const clickHandler = () =>{
    console.log('delete')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
