/** @format */

import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [cart, setCart] = useState({
    discout: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) => {
        item.id === 1 ? { ...item, quantity: item.quantity++ } : item;
      }),
    });
  };

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
