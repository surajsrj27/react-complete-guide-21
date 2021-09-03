import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1', title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e2', title: "bike Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e3', title: "Home Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: "Health Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
