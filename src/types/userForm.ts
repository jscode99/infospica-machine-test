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
