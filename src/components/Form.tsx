/** @format */

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//z.object expects an object and returns a schema with out validation rules for all of our form feels defined in it
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }), //the message key allows your to determine what you want to error message to appear as.
  age: z
    .number({ invalid_type_error: "Age is requried to be a number" }) //this will show if someone tries to enter the wrong type
    .min(18),
});

//can also use the z.infer function to define the interface for FormData
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) }); //set the resolver for our zod object in the useForm function
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />

        {
          //this code uses zod to create our error messages based on the schema that was defined above.
          errors.name && <p className="text-danger">{errors.name.message}</p>
        }
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })} // valueAsNumber removes the Expected Number, recieved String error by saying that age's value is a numbner
          id="age"
          type="number"
          className="form-control"
        />
        {
          //this code uses zod to create our error messages based on the schema that was defined above.
          errors.age && <p className="text-danger">{errors.age.message}</p>
        }
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
