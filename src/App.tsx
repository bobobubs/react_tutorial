/** @format */

import { useState, useRef, useEffect } from "react";
import "./index.css";
import ProductList from "./components/ProductList";
function App() {
  //Optionally you can have useEffect() do "Clean up" by having it return a function that undoes some of the stuff done in the effect. the example below is of connecting and reconnecting to a server

  const connect = () => console.log("Connectiong");
  const disconnect = () => console.log("Disconnecting");
  useEffect(() => {
    connect();
    // do some other things
    return () => disconnect();
  });

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
