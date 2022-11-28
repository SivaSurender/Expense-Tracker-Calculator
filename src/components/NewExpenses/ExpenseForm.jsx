import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = function (props) {
  // storing the initial value for both date and amount as string ("")since the values which are read from event.target.value will always be read as string
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // storing the entered value in entered Title
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // collecting all the data in the form of object

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // clearing the form after submit

    setEnteredTitle("");
    setenteredAmount("");
    setenteredDate("");

    // sendung the expenseData from here to its parent component and pass the final expense dat from here

    props.onSaveExpense(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
