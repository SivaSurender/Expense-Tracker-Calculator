import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = function ({ item }) {
  const [selectedYear, setSelectedYear] = useState("2019");
  const onFilterChange = (currentSelectedYear) => {
    setSelectedYear(currentSelectedYear);
  };

  // logic to render filtered items

  const filteredList = item.filter((it) => {
    return it.date.getFullYear().toString() === selectedYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={selectedYear} onFilter={onFilterChange} />
        <ExpensesList filteredList={filteredList} />
      </Card>
    </div>
  );
};
export default Expenses;
