import { useField } from "formik";
import { Password } from "primereact/password";

const FormikPassword = ({ placeholder, label, ...props }) => {
  const [field, meta] = useField(props);
  //console.log(field)
  return (
    <div className="my-2">
      <p className="font-semibold mb-1">{label}</p>
      <Password
        {...field}
        {...props}
        toggleMask
        feedback={false}
        placeholder={placeholder}
        className={`w-full ${
          meta.touched && meta.error ? "p-invalid" : ""
        }`}
      />
      {meta.touched && meta.error ? (
        <small className="p-error">{meta.error}</small>
      ) : null}
    </div>
  );
};

export default FormikPassword;
