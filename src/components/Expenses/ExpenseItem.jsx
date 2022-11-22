import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = function ({ id, title, amount, date }) {
  const [Updatedtitle, setTitle] = useState(title);

  const clickHandler = function () {
    setTitle(() => "Updated");

    // updated value won't appearing right away in next console log line, as it will be scheduled to nbe updated in react, thus won't be seen in the next console log line
    console.log(Updatedtitle);
  };
  return (
    <Card className="expense-item ">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>
          <b>{Updatedtitle}</b>
        </h2>
        <div className="expense-item__price">₹{amount}</div>
        <button onClick={clickHandler}>Click Me</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
