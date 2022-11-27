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

  // to render filtered items

  const filteredList = item.filter((it) => {
    return it.date.getFullYear().toString() === selectedYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={selectedYear} onFilter={onFilterChange} />
        {/* Rendering array of objects dynamically with map */}

        {/*Adding conditional rendering to displaay a message if there's no items selected in the list */}
        {filteredList.length === 0 ? (
          <p>No Expenses found for the selected Year</p>
        ) : (
          filteredList.map((eachItem) => (
            <ExpenseItem
              key={eachItem.id}
              title={eachItem.title}
              amount={eachItem.amount}
              date={eachItem.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};
export default Expenses;
