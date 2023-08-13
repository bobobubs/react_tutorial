/** @format */

import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;

  #dynamically set the backgroup of the list item depending on whether it is active or not
  input: props
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook: Allows for built in features in React
  //Need because we need to put a selectedIndex variable into our react element
  const [selectedIndex, setSelectedIndex] = useState(0);

  const emptyMessage = items.length === 0 ? <p>No Item Found</p> : null;

  const getMessage = () => {
    return items.length === 0 && <p>No Item Found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
