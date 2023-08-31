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

  //creating a state variable to store state of error status
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/x")
      .then((res) => setUsers(res.data))
      //catch method is used to catch errors
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
