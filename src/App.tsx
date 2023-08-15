/** @format */

import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
