import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = function ({ item }) {
  const [selectedYear, setSelectedYear] = useState("2019");
  const onFilterChange = (currentSelectedYear) => {
    setSelectedYear(currentSelectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={selectedYear} onFilter={onFilterChange} />
        {/* Rendering arry of objects dynamically with map */}
        {item.map((eachItem) => (
          <ExpenseItem
            key={eachItem.id}
            title={eachItem.title}
            amount={eachItem.amount}
            date={eachItem.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
