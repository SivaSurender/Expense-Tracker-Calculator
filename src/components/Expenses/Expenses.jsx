import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = function ({ item }) {
  return (
    <Card className="expenses">
      <ExpenseItem
        id={item[0].id}
        title={item[0].title}
        amount={item[0].amount}
        date={item[0].date}
      />
      <ExpenseItem
        id={item[1].id}
        title={item[1].title}
        amount={item[1].amount}
        item
        date={item[1].date}
      />
      <ExpenseItem
        id={item[2].id}
        title={item[2].title}
        amount={item[2].amount}
        date={item[2].date}
      />
      <ExpenseItem
        id={item[3].id}
        title={item[3].title}
        amount={item[3].amount}
        date={item[3].date}
      />
    </Card>
  );
};
export default Expenses;
