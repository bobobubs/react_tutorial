/** @format */

import { useState } from "react";
import Form from "./components/Form";
import "./index.css";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import { ExpenseForm } from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "abc", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "dddd", amount: 10, category: "Utilities" },
    { id: 5, description: "efa", amount: 10, category: "Utilities" },
  ]);

  return (
    <>
      <div>
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}

export default App;
