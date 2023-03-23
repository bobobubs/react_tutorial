/** @format */

import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button onClick={() => console.log("CLICKED")} color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
