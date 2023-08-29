/** @format */

import React, { useEffect, useState } from "react";

//can define the interface for ProductList if the interface is < 2 items
//inline by using the following notation
const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  //going to use an effect to fetch thr products from our "server"
  //Not actually using the complexity of a server.
  useEffect(() => {
    console.log("Fetching Products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);
  // to prevent render looping add the second argument which is a list
  //of states, or props that the effect is dependent on. The effect
  //will only trigger when the items in the array change. Empty array
  // means that there are no dependencies and the effect will only
  // trigger once.

  return <div>ProductList</div>;
};

export default ProductList;
