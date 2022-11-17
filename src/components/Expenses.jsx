import ExpenseItem from "./ExpenseItem";
const Expenses = function ({ item }) {
  return (
    <div>
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
    </div>
  );
};
export default Expenses;
