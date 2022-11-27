import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  {
    /* Rendering array of objects dynamically with map */
  }
  {
    /*Adding conditional rendering to displaay a message if there's no items selected in the list */
  }
  if (props.filteredList.length === 0) {
    return (
      <p className="expenses-list__fallback">
        No Expenses found for the selected Year
      </p>
    );
  }
  // if (props.filteredList.length) {
  return (
    <ul className="expenses-list">
      {props.filteredList.map((eachItem) => (
        <ExpenseItem
          key={eachItem.id}
          title={eachItem.title}
          amount={eachItem.amount}
          date={eachItem.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
