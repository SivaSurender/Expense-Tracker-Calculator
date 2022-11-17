import "./ExpenseItem.css";
const ExpenseItem = function () {
  return (
    <div className="expense-item ">
      <div>16 Nov 2022</div>
      <div className="expense-item__description">
        <h2>Soda</h2>
        <div className="expense-item__price">₹30</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
