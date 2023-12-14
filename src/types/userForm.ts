export type IUserFormProps = {
  onSubmit: (arg: any) => void;
  initialValue: {};
};

export type IUserRecordForm = {
  id?: number;
  name: string;
  dob: string;
  email: string;
  salary: string;
  gender: string;
};

export type InputFieldProps = {
  options?: { label: string; value: string }[];
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any,
  ) => void;
  onBlur: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  error: any;
};

// Use Form Hook

export type IFormData = {
  name: string;
  dob: string;
  email: string;
  salary: number;
  gender: string;
};

export type IFormErrors = {
  [K in keyof IFormData]: K extends "salary" ? string : IFormData[K];
};

export type IFormValidation = {
  isSubmitting: boolean;
  errors: IFormErrors;
  onChangeHanlder: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any,
  ) => void;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  onErrorValidation: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
};
