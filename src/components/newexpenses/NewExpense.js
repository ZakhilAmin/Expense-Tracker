import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isSetExpense, isAddExpense] = useState(false);

  const saveExpenseItem = (enteredExpenseitem) => {
    const expenseItem = { ...enteredExpenseitem, id: Math.random().toString() };
    // console.log("New Expense form");
    // console.log(expenseItem);
    props.onNewExpenseItem(expenseItem);
    isAddExpense(false);
  };
  const startEditingExp = () => {
    isAddExpense(true);
  };
  const onStopEditing = () => {
    isAddExpense(false);
  };
  return (
    <div className="new-expense">
      {!isSetExpense && (
        <button onClick={startEditingExp}>Add new expense</button>
      )}
      {isSetExpense && (
        <ExpenseForm
          onSaveExpenseItem={saveExpenseItem}
          onHandleClick={onStopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
