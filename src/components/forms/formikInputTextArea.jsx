import { useField } from "formik";
import { InputTextarea } from 'primereact/inputtextarea';
import Label from "./label";

const FormikInputTextArea = ({
  label,
  tooltip,
  value,
  onChange,
  disabled,
  required,
  optional,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className="my-2 flex-1">
      <Label label={label} tooltip={tooltip} required={required} optional={optional}/>
      <InputTextarea
        {...field}
        {...props}
        value={value}
        onChange={onChange}
        className={`w-full ${meta.touched && meta.error ? "p-invalid" : null}`}
        disabled={disabled}
      />
      {meta.touched && meta.error ? (
        <small className="p-error">{meta.error}</small>
      ) : null}
    </div>
  );
};

export default FormikInputTextArea;