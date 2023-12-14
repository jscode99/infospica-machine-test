import { useEffect, useState } from "react";
// Utils
import { VALIDATION_MSG } from "../utils/constants";
import { validateInput, isFieldEmpty } from "../utils/userRecordForm";

interface IFormData {
  name: string;
  dob: string;
  email: string;
  salary: number;
  gender: string;
}

function useFormValidation(initialState: IFormData, addUser: any) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<any>({
    name: "",
    dob: "",
    email: "",
    salary: "",
    gender: "",
  });
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      console.log("Error Data =======>", errors);
      const noError = Object.values(errors).length === 5;
      if (noError) {
        console.log("Submitted Form Data =======>", formData);
        addUser(formData);
      }
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
    }
  }, [formData, errors, isSubmitting]);

  const onErrorValidation = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const value = e.target.value;
    const key = e.target.name;
    const errorMessage = validateInput(key, value);
    setErrors((prev: IFormData) => ({ ...prev, [key]: errorMessage }));
  };

  const onChangeHanlder = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any,
  ) => {
    const value = e.target.value;
    const key = e.target.name;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData, errors);

    const { name, dob, email, salary, gender } = formData;

    if (name && dob && email && salary && gender) {
      setSubmitting(true);
    } else {
      setErrors({
        name:
          isFieldEmpty(name) && !errors.name
            ? VALIDATION_MSG.REQUIRED
            : errors.name,
        dob:
          isFieldEmpty(dob) && !errors.dob
            ? VALIDATION_MSG.REQUIRED
            : errors.dob,
        email:
          isFieldEmpty(email) && !errors.email
            ? VALIDATION_MSG.REQUIRED
            : errors.email,
        salary:
          salary === 0 && !errors.salary
            ? VALIDATION_MSG.REQUIRED
            : errors.salary,
        gender:
          isFieldEmpty(gender) && !errors.gender
            ? VALIDATION_MSG.REQUIRED
            : errors.gender,
      });
    }
  };

  return {
    isSubmitting,
    errors,
    onChangeHanlder,
    onSubmitHandler,
    onErrorValidation,
  };
}

export default useFormValidation;
