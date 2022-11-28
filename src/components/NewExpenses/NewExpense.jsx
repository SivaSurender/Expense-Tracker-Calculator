import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = function (props) {
  const [isEditing, setIsEditing] = useState(false);

  const isEditinghandler = () => {
    setIsEditing(!isEditing);
  };

  // to get data from parent to child
  const saveExpenseHandler = (prevExpData) => {
    const expenseData = {
      ...prevExpData,
      id: Math.random().toString(),
    };

    console.log(expenseData, "Newexpense");

    // pushing the dat from here to its parent

    props.onGetNewExpense(expenseData);

    // close the form once submitted with the help of usestate is editahandler function

    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={isEditinghandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={isEditinghandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
