import "./ExpenseItem.css";
const ExpenseItem = function ({ id, title, amount, date }) {
  console.log(id, title, amount, date);

  return (
    <div className="expense-item ">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
