/** @format */

import React from "react";

const Form = () => {
  return (
    <form
      //this is the property that is to be set to a function.
      // can be an inline arrow function like it is done here.
      // or it can be a reference to a function defined elsewhere.
      // although if done like ^ then it is only a reference in the prop. NOT A Call
      onSubmit={(event) => {
        //preventDefault is used to prevent the submit button
        //from actually sending anything to the server.
        event.preventDefault();
        console.log("Submitted");
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
