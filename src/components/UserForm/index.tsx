"use client";
import React from "react";
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
  return (
    <div className="form-card-container">
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div className="form-first-row">
          <div>
            <div>
              <label htmlFor="name" className="label-typography">
                Name:<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your full name"
                onChange={(e) => onChangeHanlder(e)}
                onBlur={(e) => onErrorValidation(e)}
              />
            </div>
            <div className="h-4 mt-1">
              {errors?.name ? (
                <p id="outlined_success_help" className="error-message">
                  {errors?.name}
                </p>
              ) : (
                false
              )}
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="dob">
                Date of Birth:<span className="text-red-700">*</span>
              </label>
              <input
                type="date"
                name="dob"
                className="form-input"
                onChange={(e) => onChangeHanlder(e)}
                onBlur={(e) => onErrorValidation(e)}
              />
            </div>
            <div className="h-4 mt-1">
              {errors?.dob ? (
                <p id="outlined_success_help" className="error-message">
                  {errors?.dob}
                </p>
              ) : (
                false
              )}
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="label-typography">
            Email address<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            name="email"
            className="form-input"
            placeholder="Your email address"
            onChange={(e) => onChangeHanlder(e)}
            onBlur={(e) => onErrorValidation(e)}
          />
          <div className="h-4 mt-1">
            {errors?.email ? (
              <p id="outlined_success_help" className="error-message">
                {errors?.email}
              </p>
            ) : (
              false
            )}
          </div>
        </div>

        <div className="form-first-row">
          <div>
            <div>
              <label htmlFor="name" className="label-typography">
                Salary:<span className="text-red-700">*</span>
              </label>
              <input
                type="number"
                name="salary"
                className="form-input"
                placeholder="Current CTC"
                onChange={(e) => onChangeHanlder(e)}
                onBlur={(e) => onErrorValidation(e)}
              />
            </div>
            <div className="h-4 mt-1">
              {errors?.salary ? (
                <p id="outlined_success_help" className="error-message">
                  {errors?.salary}
                </p>
              ) : (
                false
              )}
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="gender">
                Gender:<span className="text-red-700">*</span>
              </label>
              <select
                name="gender"
                className="form-input"
                onChange={(e) => onChangeHanlder(e)}
                onBlur={(e) => onErrorValidation(e)}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="h-4 mt-1">
              {errors?.gender ? (
                <p id="outlined_success_help" className="error-message">
                  {errors?.gender}
                </p>
              ) : (
                false
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? `Submitting....` : `Submit feedback`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
