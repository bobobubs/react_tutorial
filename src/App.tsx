/** @format */

import { useState, useRef, useEffect } from "react";
import axios, { CanceledError } from "axios";
import "./index.css";
import ProductList from "./components/ProductList";


interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {signal: controller.signal}) 
      .then((res) => {setUsers(res.data);
          setIsLoading(false); 
      })
      .catch((err) => {if (err instanceof CanceledError) return;
      setError(err.message);
      setIsLoading(false);
      });
    
    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {

    const originalUsers = [...users];

    setUsers(users.filter(u => u.id !== user.id));

    axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  }

  const addUser = () => {
    const originalUsers = [...users];
    //optimistic paradigm so update the UI 
    const newUser = {id: 0,  name: "Mason"};
    setUsers([newUser, ...users]);

    //then update the data on the server.
    //use the axios.post() method to post new information to the server
    axios.post("https://jsonplaceholder.typicode.com/users/", newUser).then
    //on this line destructuring the response and using an alias to make the code easier to read.
    (({data: savedUser}) => setUsers([savedUser, ...users])).catch((error) => { 
      setError(error.message);
      setUsers(originalUsers);
    });
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}

      <button  className="btn btn-primary mb-3" onClick={addUser}>Add</button>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item  d-flex justify-content-between">{user.name} <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button></li>
        ))}
      </ul>
    </>
  );
}

export default App;