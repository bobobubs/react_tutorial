/** @format */

import { useState, useRef, useEffect } from "react";
import "./index.css";
import ProductList from "./components/ProductList";
function App() {
  const [category, setCategory] = useState("");

  // afterRender
  useEffect(() => {});

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
