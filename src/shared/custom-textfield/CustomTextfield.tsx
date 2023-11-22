import { InputText } from "primereact/inputtext";
import type { InputTextProps } from "primereact/inputtext";

type CustomTextFieldProps = {
  isError?: boolean;
  errorMessage?: string;
  fieldName: string;
  customClassName?: string
} & InputTextProps;

const CustomTextField = ({
  fieldName,
  errorMessage = `${fieldName} is required`,
  isError = true,
  ...props
}: CustomTextFieldProps) => {
  return (
    <div className={props.customClassName ?? ""}>
      <label>{fieldName}</label>
      <InputText {...props} />
      {isError && <label className="text-sm text-red-600">{errorMessage}</label>}
    </div>
  );
};

export default CustomTextField;
