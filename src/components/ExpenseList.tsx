/** @format */

import React from "react";
import Expense from "./Expense";

const ExpenseList = () => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {Expense({
            description: "Water",
            amount: 100,
            category: "Utility",
          })}
          {Expense({
            description: "Power",
            amount: 200,
            category: "Utility",
          })}
          {Expense({
            description: "Groceries",
            amount: 150,
            category: "Need",
          })}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
