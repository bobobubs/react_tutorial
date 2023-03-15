/** @format */

import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Claremont", "Upland", "Montclair", "Pasadena", "Los Angeles"];

  const emptyMessage = items.length === 0 ? <p>No Item Found</p> : null;

  const getMessage = () => {
    return items.length === 0 && <p>No Item Found</p>;
  };

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
