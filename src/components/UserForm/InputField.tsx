import React from "react";
// Types
import { InputFieldProps } from "@/types/userForm";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  error,
  options,
}: InputFieldProps) => {
  return (
    <div>
      <div className={options ? `h-[5vh]` : ""}>
        <label htmlFor={name} className="label-typography">
          {label}:<span className="text-red-700">*</span>
        </label>
        {!options ? (
          <input
            type={type}
            name={name}
            className="form-input"
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
          />
        ) : (
          <div className="flex h-full items-center space-x-4">
            {options.map((option) => (
              <label key={option.value}>
                <input
                  type={type}
                  name={name}
                  value={option.value}
                  className="form-radio"
                  onChange={onChange}
                  onBlur={onBlur}
                />{" "}
                {option.label}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className={`h-4 ${!options ? "mt-2" : "mt-8"}`}>
        {error ? (
          <p id="outlined_success_help" className="error-message">
            {error}
          </p>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default InputField;
