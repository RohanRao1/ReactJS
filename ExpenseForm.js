import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle : '',
  //   enteredAmount : '',
  //   enteredDate : ''
  // })

  const titleChange = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle : event.target.value ,
    // })   // used when previous state is not kept in mind

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });   //used when previous state is kept in mind
  }; 

  const amountChange = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChange = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return {...prevState, enteredDate : event.target.value}
    // })
  };

  const addExpense = (event) => {
    event.preventDefault()
    
    const expenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date :new Date(enteredDate)
    }

    console.log(expenseData)
  }

  return (
    <form onSubmit={addExpense}>
      <div className="new-expense__contorls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
