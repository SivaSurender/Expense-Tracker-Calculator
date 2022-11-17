import "./ExpenseItem.css";
const ExpenseItem = function () {
  const expenseDate = new Date().toISOString();

  const expenseDescription = "Soda";
  const expensePrice = 30;

  return (
    <div className="expense-item ">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseDescription}</h2>
        <div className="expense-item__price">₹{expensePrice}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
