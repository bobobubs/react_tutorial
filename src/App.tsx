/** @format */

import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={["Baldurs gate", "Diablo 4", "Coding"]}
        heading="Activities I could be doing"
        onSelectItem={() => console.log("Something was sellected")}
      />
    </div>
  );
}

export default App;
