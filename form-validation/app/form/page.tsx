"use client";
import React, { useState } from "react";
import TextField from "../Components/TextField";
type FormData = {
  fullname: string;
  email: string;
  password: string;
};

type ErrorData = {
  fullname?: string;
  email?: string;
  password?: string;
} | null;

function FormPage() {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<ErrorData>({});

  const formValidator = (formData: FormData) => {
    const errorData: ErrorData = {};
    if (!formData.fullname) {
      errorData.fullname = "Full Name is required!";
    }
    if (!formData.email) {
      errorData.email = "Email is required!";
    }
    if (!formData.password) {
      errorData.password = "Password is required!";
    }
    setError(errorData);
    return errorData;
  };

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setError({});
  }
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationResult = formValidator(formData);
    if (!Object.keys(validationResult).length) {
      console.log("Form submitted successfully:", formData);
      setFormData({
        fullname: "",
        email: "",
        password: "",
      });
      setError({});
      return;
    }
  }
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={submitHandler}>
        <TextField
          label={"Full Name"}
          id={"fullname"}
          value={formData.fullname}
          type={"text"}
          placeholder={"Enter your full name"}
          name={"fullname"}
          onChange={onChangeHandler}
          error={error?.fullname}
        />

        <TextField
          label={"Email"}
          id={"email"}
          type={"email"}
          placeholder={"Enter your email"}
          name={"email"}
          onChange={onChangeHandler}
          value={formData.email}
          error={error?.email}
        />

        <TextField
          label={"Password"}
          id={"password"}
          type={"password"}
          placeholder={"Enter your password"}
          name={"password"}
          onChange={onChangeHandler}
          value={formData.password}
          error={error?.password}
        />

        <button
          type="submit"
          className="mt-4 w-full bg-green-500 text-white font-bold py-2 rounded-md hover:bg-green-600 transition-colors cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;
