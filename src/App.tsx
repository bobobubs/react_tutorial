/** @format */

import { useState, useRef, useEffect } from "react";
//axios is a library to use http requests
import axios, { AxiosError } from "axios";
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
    //instead of using axious.get().then().catch() we can use
    //async and await

    //NOTE: This is kind of ugly because of the way that the react useEffect() hook works
    const fetchUsers = async () => {
      //add try catch block in the case of an error
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        //setting the type of error below to make the ts compiler happy
        setError((err as AxiosError).message);
      }
    };

    //call the function we just created
    fetchUsers();
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
