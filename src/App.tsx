/** @format */

import { useState } from "react";
import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <Button
      onClick={() => {
        console.log("Button was pressed");
      }}
    >
      My Button
    </Button>
  );
}

export default App;
