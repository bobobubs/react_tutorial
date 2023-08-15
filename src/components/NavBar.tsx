/** @format */

import React from "react";

interface Props {
  cartNumItems: number;
}

const NavBar = ({ cartNumItems }: Props) => {
  return <div>NavBar: {cartNumItems}</div>;
};

export default NavBar;
