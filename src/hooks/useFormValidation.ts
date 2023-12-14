import { useState } from "react";
// Types
import { IFormData, IFormErrors, IFormValidation } from "@/types/userForm";
// Utils
import { VALIDATION_MSG } from "@/utils/constants";
import { validateInput, isFieldEmpty } from "@/utils/userRecordForm";

function useFormValidation(
  initialState: IFormData,
  addUser: any,
): IFormValidation {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<IFormErrors>({
    name: "",
    dob: "",
    email: "",
    salary: "",
    gender: "",
  });
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const onErrorValidation = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const value = e.target.value;
    const key = e.target.name;
    const errorMessage = validateInput(key, value);
    setErrors((prev: IFormErrors) => ({ ...prev, [key]: errorMessage }));
  };

  const onChangeHanlder = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any,
  ) => {
    const value = e.target.value;
    const key = e.target.name;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const validateForm = () => {
    const { name, dob, email, salary, gender } = formData;

    const newErrors = {
      name:
        isFieldEmpty(name) && !errors.name
          ? VALIDATION_MSG.REQUIRED
          : errors.name,
      dob:
        isFieldEmpty(dob) && !errors.dob ? VALIDATION_MSG.REQUIRED : errors.dob,
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
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData, errors);

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    console.log("Submitted Form Data =======>", formData);
    addUser(formData);

    setTimeout(() => {
      setSubmitting(false);
    }, 1500);
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
