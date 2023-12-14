import { VALIDATION_MSG, EMAIL_REGEX } from "./constants";

export const isFieldEmpty = (field: string): boolean => {
  return field.trim().length === 0;
};

export const validateInput = (key: string, value: string) => {
  switch (key) {
    case "name":
      return value.length <= 2 ? VALIDATION_MSG.NAME : "";
    case "email":
      return !EMAIL_REGEX.test(value) ? VALIDATION_MSG.EMAIL : "";
    case "dob":
      return value.length === 0 ? VALIDATION_MSG.DOB : "";
    case "salary":
      return value.length === 1 ? VALIDATION_MSG.SALARY : "";
    case "gender":
      return value.length === 0 ? VALIDATION_MSG.GENDER : "";
    default:
      return "";
  }
};
