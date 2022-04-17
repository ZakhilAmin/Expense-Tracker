import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const [enteredTitle, setEnteredTittle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const OnTitleChange = (event) => {
    setEnteredTittle(event.target.value);
    //console.log(enteredTitle);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const onAmountChange = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const onDateChange = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseItem(expenseData);
    setEnteredTittle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={OnTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={onAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={onDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onHandleClick}>
          Cancel{" "}
        </button>
        <button type="submite">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
