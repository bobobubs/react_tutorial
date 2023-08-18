/** @format */

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  // Craete a register which is a function that is from the useForm returned object
  const { register, handleSubmit } = useForm();

  // function that will be called to handle the logic when the submit button is clicked.
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    //this is probably the worst syntax that I have ever seen.
    //the first on submit is a propert of the <form> element.
    //handleSubmit is a function that is from the object returned from useForm
    //the second onSubmit is the function that we defined above.
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          //the register function returns a bunch of properties of something associate with name
          {...register("name")}
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
          {...register("age")}
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
