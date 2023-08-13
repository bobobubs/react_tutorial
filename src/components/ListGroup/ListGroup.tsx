/** @format */

import { useState } from "react";
import "./";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook: Allows for built in features in React
  //Need because we need to put a selectedIndex variable into our react element
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const emptyMessage = items.length === 0 ? <p>No Item Found</p> : null;

  const getMessage = () => {
    return items.length === 0 && <p>No Item Found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
