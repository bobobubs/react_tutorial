/** @format */

import { useState, useRef, useEffect } from "react";
//axios is a library to use http requests
import axios, { CanceledError } from "axios";
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
    //AbortController() is a built in function to modern browsers that allows us to cancel any fetch request or DOM update or anything else like that.
    const controller = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {signal: controller.signal}) // set the signal property to use the controller as a signal.
      .then((res) => setUsers(res.data))
      //update the catch logic to disregard 
      .catch((err) => {if (err instanceof CanceledError) return;
      setError(err.message);
      });
    
    //use controller to cleanup the request
    return () => controller.abort();
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