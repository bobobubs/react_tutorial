/** @format */

import { useState } from "react";
import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <Like onClick={() => console.log("Clicked!")} />
    </div>
  );
}

export default App;
