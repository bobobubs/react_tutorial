/** @format */

import React from "react";
import categories from "./categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

//this component is only responsible for showing filters.
//The actual act of filtering is taken care of in the app.
//This is because the app actually maintians the state of the expenses
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
