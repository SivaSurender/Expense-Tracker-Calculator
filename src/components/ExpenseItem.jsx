import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = function ({ id, title, amount, date }) {
  return (
    <div className="expense-item ">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>
          <b>{title}</b>
        </h2>
        <div className="expense-item__price">₹{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
