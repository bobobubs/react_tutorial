/** @format */

import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Claremont", "Upland", "Montclair", "Pasadena", "Los Angeles"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
