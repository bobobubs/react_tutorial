/** @format */

import { useState } from "react";
import Form from "./components/Form";
import "./index.css";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import { ExpenseForm } from "./components/expense-tracker/components/ExpenseForm";
import ExpenseFilter from "./components/expense-tracker/components/expenseFilter";
import categories from "./components/expense-tracker/components/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "abc", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "dddd", amount: 10, category: "Utilities" },
    { id: 5, description: "efa", amount: 10, category: "Utilities" },
  ]);

  //make a local variable of the filtered expenses
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenses(visibleExpenses.filter((e) => e.id !== id))
          }
        />
      </div>
    </>
  );
}

export default App;
