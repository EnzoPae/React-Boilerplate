import { useField } from "formik";
import { InputText } from "primereact/inputtext";
import Label from "./label";

const FormikInput = ({ placeholder, label, tooltip, disabled, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="my-2 flex-1">
      <Label label={label} tooltip={tooltip} />
      <InputText
        {...field}
        {...props}
        placeholder={placeholder}
        className={`w-full ${meta.touched && meta.error ? "p-invalid" : null}`}
        disabled={disabled ? true : false}
      />
      {meta.touched && meta.error ? (
        <small className="p-error">{meta.error}</small>
      ) : null}
    </div>
  );
};

export default FormikInput;
