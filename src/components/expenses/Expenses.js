import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const { expenses } = props;
  const onFilterStateChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // assigning filtered contend to a variable for clean codding
  // also added the message if no data exist while filtering

  // added filtering to display the result of expensed when it filter
  const expsenseFilteredYear = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={onFilterStateChange}
      />
      <ExpensesChart expenses={expsenseFilteredYear} />
      <ExpensesList data={expsenseFilteredYear} />
    </Card>
  );
};

export default Expenses;
