/** @format */

import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Pepperoni"] });
  };

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
