/** @format */

import React, { useRef } from "react";

const Form = () => {
  //useRef is a REACT hook to get a reference to another element
  // here HTMLInputElement is specified to let the compilier know
  // that nameRef will be an HTML element.
  // always have to initialize a useRef call to null or an
  //existing DOM element. otherwise potential for undefined behavior
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  //When submitting a form the usual protocol is to send an object.
  const person = { name: " ", age: 0 };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        //always should check if what you want to use is null
        if (nameRef.current !== null) person.name = nameRef.current.value;
        if (ageRef.current !== null)
          //parseInt() is needed here because the value is a string and we
          // defined person.age to be an int up above.
          person.age = parseInt(ageRef.current.value);
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
