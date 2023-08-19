/** @format */

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

//defines an interface for the Form that we are defining
interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    //nested destructuring to get the errors prop from formState
    formState: { errors },
  } = useForm<FormData>(); //invoking the interface when we call useForm
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // can also add an object as an argument to register to allow for HTML data validation properties
          //onSubmit will not be invoked unless validation is passed.
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />

        {
          //name? is using optional chaining. Basically if name is not there, thenwe will not continue to interpret that code.
          errors.name?.type === "required" && (
            <p className="text-danger">Name is required</p>
          )
        }
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name must be at least 3 charaters.</p>
        )}
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
