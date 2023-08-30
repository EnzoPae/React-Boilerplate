import { useField } from "formik";
import { Checkbox } from "primereact/checkbox";

const FormikCheckbox = ({ label, disabled, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <div className="flex align-items-center my-2">
      <Checkbox {...field} {...props} disabled={disabled ? true : false} />
      <label className="ml-2">{label}</label>
    </div>
  );
};

export default FormikCheckbox;
