/** @format */

import React, { useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Expense from "./Expense";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }), //the message key allows your to determine what you want to error message to appear as.
  amount: z
    .number({ invalid_type_error: "Age is requried to be a number" }) //this will show if someone tries to enter the wrong type
    .min(0),
  category: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
});

type FormData = z.infer<typeof schema>;

const [expense, setExpense] = useState({
  description: "",
  amount: 0,
  category: "",
});
const onSubmit = (data: FieldValues) => {
  e.preventDefault();
  props.onFormSubmit(expense);
  //setExpense({ data });
  //console.log(expense);
};

export const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {
          //this code uses zod to create our error messages based on the schema that was defined above.
          errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )
        }
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })} // valueAsNumber removes the Expected Number, recieved String error by saying that amount's value is a numbner
          id="amount"
          type="number"
          className="form-control"
        />
        {
          //this code uses zod to create our error messages based on the schema that was defined above.
          errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )
        }
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
          defaultValue={"default"}
        >
          <option value="default" disabled hidden>
            Choose a category...
          </option>
          <option value="Utility">Utility</option>
          <option value="Need">Need</option>
          <option value="Want">Want</option>
          <option value="Entertainment">Etertainment</option>
          <option value="Rent">Rent</option>
        </select>
        {
          //this code uses zod to create our error messages based on the schema that was defined above.
          errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )
        }
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
