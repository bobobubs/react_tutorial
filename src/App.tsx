/** @format */

import { useState, useRef, useEffect } from "react";
//axios is a library to use http requests
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
          setIsLoading(false); //change state after data is resolved
      })
      .catch((err) => {if (err instanceof CanceledError) return;
      setError(err.message);
      setIsLoading(false);
      });
    
    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;