import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance' ;
  const expenseAmount = 500 ;
  const locationOfExpenditure = 'Hubli' ;


  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle} - {locationOfExpenditure}</h2>
        <div className="expense-item__price">Rs. {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
