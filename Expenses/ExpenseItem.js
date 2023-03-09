import Card from "../UI/Card";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
     {/* <ExpenseDetails amount={props.amount} 
      title={props.title} />  */}
    </Card>
  );
}

export default ExpenseItem;
