/** @format */

import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [cartItems, setCartItems] = useState(["apples", "oranges"]);

  return (
    <>
      <div>
        <NavBar cartNumItems={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
    </>
  );
}

export default App;
