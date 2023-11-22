"use client";
import CustomTextField from "@/shared/custom-textfield/CustomTextfield";
import { ChangeEvent, FC, useReducer } from "react";

type FormField = {
  placeholder: string;
  value: string;
  errorMessage?: string;
  isError?: boolean;
  type: string;
  required?: true;
  fieldName: string;
};

type UserFormState = {
  name: FormField;
  email: FormField;
};

const SharedComponentPreview: FC = () => {
  const [userForm, setUserForm] = useReducer(
    (state: UserFormState, newState: Partial<UserFormState>) => ({
      ...state,
      ...newState,
    }),
    {
      name: {
        placeholder: "Enter your name",
        fieldName: "Name",
        value: "",
        errorMessage: "",
        isError: false,
        type: "text",
        required: true,
      },
      email: {
        placeholder: "Enter your email address",
        fieldName: "Email",
        value: "",
        errorMessage: "",
        isError: false,
        type: "email",
        required: true,
      },
    } as UserFormState
  );

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>, field: FormField): FormField => {
    const initVal = { ...field };
    initVal.value = event.target.value
    return initVal;
  }

  return (
    <div className="flex min-h-screen items-center flex-col gap-y-4 justify-center">
      <CustomTextField
        fieldName={userForm.name.fieldName}
        placeholder={userForm.name.placeholder}
        value={userForm.name.value}
        errorMessage={userForm.name.errorMessage}
        isError={userForm.name.isError}
        type={userForm.name.type}
        customClassName="flex flex-col"
        onChange={e => setUserForm({ name: handleOnChange(e, userForm.name) })}
      />
      <CustomTextField
        fieldName={userForm.email.fieldName}
        placeholder={userForm.email.placeholder}
        value={userForm.email.value}
        errorMessage={userForm.email.errorMessage}
        isError={userForm.email.isError}
        type={userForm.email.type}
        customClassName="flex flex-col"
        onChange={e => setUserForm({ email: handleOnChange(e, userForm.email) })}
      />
      <p className="bg-gray-200 rounded-md p-4">
        Name: {userForm.name.value} | Email: {userForm.email.value}
      </p>
    </div>
  );
};

export default SharedComponentPreview;
