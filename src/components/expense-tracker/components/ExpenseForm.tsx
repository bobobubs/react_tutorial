/** @format */

import React, { useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Expense from "../../Expense";
import categories from "./categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }), //the message key allows your to determine what you want to error message to appear as.
  amount: z
    .number({ invalid_type_error: "Amount is requried to be a number" }) //this will show if someone tries to enter the wrong type
    .min(0.01),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type FormData = z.infer<typeof schema>;
const onSubmit = (data: FieldValues) => {
  console.log(data);
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
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {
          //this code uses zod to create our error messages based on the schema that was defined above.
          errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )
        }
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
