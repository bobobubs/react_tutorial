/** @format */

import React, { useRef, useState } from "react";

const Form = () => {
  //initialize a state variable to hold the person
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(person);
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          //update the person state variable using the onChange event.
          //This will happen whenever someone does something like a keystroke.
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
          //value is set discretely to make REACT the single source of truth
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
