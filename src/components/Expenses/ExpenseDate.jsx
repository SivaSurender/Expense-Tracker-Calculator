import "./ExpenseDate.css";
const ExpenseDate = function ({ date }) {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">
        <b>{day}</b>
      </div>
      <div className="expense-date__month">
        <b>{month}</b>
      </div>
      <div className="expense-date__year">
        <b>{year}</b>
      </div>
    </div>
  );
};

export default ExpenseDate;
