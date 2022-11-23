import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = function (props) {
  // to get data from parent to child
  const saveExpenseHandler = (prevExpData) => {
    const expenseData = {
      ...prevExpData,
      id: Math.random().toString(),
    };

    console.log(expenseData, "Newexpense");

    // pushing the dat from here to its parent

    props.onGetNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
