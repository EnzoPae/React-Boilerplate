import { useField } from "formik";
import { Password } from "primereact/password";

const FormikPassword = ({ placeholder, label, disabled, ...props }) => {
  const [field, meta] = useField(props);
  //console.log(field)
  return (
    <div className="my-2 flex-1">
      <p className="font-semibold mb-1">{label}</p>
      <Password
        {...field}
        {...props}
        toggleMask
        feedback={false}
        placeholder={placeholder}
        className={`w-full ${meta.touched && meta.error ? "p-invalid" : ""}`}
        disabled={disabled ? true : false}
      />
      {meta.touched && meta.error ? (
        <small className="p-error">{meta.error}</small>
      ) : null}
    </div>
  );
};

export default FormikPassword;
