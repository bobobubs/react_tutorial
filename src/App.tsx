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
    //use this to fix UI if there is an error.
    const originalUsers = [...users];
    //update the users list on delete using filter method
    //This will update the ui. 
    setUsers(users.filter(u => u.id !== user.id));

    //delete the user on the server
    axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item  d-flex justify-content-between">{user.name} <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button></li>
        ))}
      </ul>
    </>
  );
}

export default App;