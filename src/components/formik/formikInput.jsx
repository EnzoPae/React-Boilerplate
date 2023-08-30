import { useField } from "formik";
import { InputText } from "primereact/inputtext";

const FormikInput = ({ placeholder, label, disabled, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="my-2 flex-1">
      <p className="font-semibold mb-1">{label}</p>
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
