/** @format */

import { useState } from "react";
import Form from "./components/Form";
import "./index.css";
import ExpenseList from "./components/ExpenseList";
import { ExpenseForm } from "./components/ExpenseForm";

function App() {
  return (
    <>
      <ExpenseForm />
      <div>
        <ExpenseList />
      </div>
    </>
  );
}

export default App;
