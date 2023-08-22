/** @format */

import React from "react";

interface Props {
  description: string;
  amount: number;
  category: string;
}

const Expense = ({ description, amount, category }: Props) => {
  return (
    <tr>
      <td>{description}</td>
      <td>$ {amount}</td>
      <td>{category}</td>
      <td>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Expense;
