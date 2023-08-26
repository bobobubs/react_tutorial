/** @format */

import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

//want to pass in expenses to the list as props so that the component is reuseable.
interface Props {
  expenses: Expense[];
  //callback function to be used by the component that consumes ExpenseList
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  //dont return a list if there are no expenses
  if (expenses.length === 0) return null;

  //can make a table using the following shorthand: table.table.table-bordered
  //can make table headers using thead>tr>th*4
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {
              expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2) /*reduce method is built into js*/
            }
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
