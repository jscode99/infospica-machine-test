"use client";
import React from "react";
// Components
import InputField from "./InputField";
// Types
import { IUserFormProps, IUserRecordForm } from "@/types/userForm";
// Hooks
import useFormValidation from "@/hooks/useFormValidation";
// Styles
import "./user-form.css";

type UserFormProps = {
  addUser: (e: any) => void;
};

const UserForm = ({ addUser }: UserFormProps) => {
  const initialState = {
    name: "",
    dob: "",
    email: "",
    salary: 0,
    gender: "",
  };

  const {
    isSubmitting,
    errors,
    onChangeHanlder,
    onSubmitHandler,
    onErrorValidation,
  } = useFormValidation(initialState, addUser);

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  return (
    <div className="form-card-container">
      <form onSubmit={onSubmitHandler}>
        <div className="form-first-row">
          <InputField
            label="Name"
            name="name"
            type="text"
            placeholder="Your Full Name"
            onChange={onChangeHanlder}
            onBlur={onErrorValidation}
            error={errors?.name}
          />
          <InputField
            label="Date of Birth"
            name="dob"
            type="date"
            onChange={onChangeHanlder}
            onBlur={onErrorValidation}
            error={errors?.dob}
          />
        </div>
        <div className="mb-3">
          <InputField
            label="Email Address"
            name="email"
            type="text"
            placeholder="Your Email Address"
            onChange={onChangeHanlder}
            onBlur={onErrorValidation}
            error={errors?.email}
          />
        </div>
        <div className="form-first-row">
          <InputField
            label="Salary"
            name="salary"
            type="number"
            placeholder="Your Current CTC"
            onChange={onChangeHanlder}
            onBlur={onErrorValidation}
            error={errors?.salary}
          />
          <div>
            <InputField
              label="Gender"
              name="gender"
              type="radio"
              options={genderOptions}
              onChange={onChangeHanlder}
              onBlur={onErrorValidation}
              error={errors?.gender}
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? `Submitting....` : `Save Record`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
