/** @format */

import { useState, useRef, useEffect } from "react";
//axios is a library to use http requests
import axios from "axios";
import "./index.css";
import ProductList from "./components/ProductList";

//interface that will be used to make our code typesafe when we are doing things with the response in the promises then() method
interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    //the get functions gets information from an endpoint
    //axios.get() returns a promise. the server may take a long time
    //to get the information taht we requested.
    //Promise: An object that holds the eventual result or failure of an asynchronus operation. (asynchronus = long runnning)
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
    //then is a method of any type of reponse and specifies what to do after the promise is resolved.
  }, []);

  //down here we render the users recieved from the request
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
