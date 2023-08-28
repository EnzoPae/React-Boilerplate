import { useField } from "formik";
import { Checkbox } from "primereact/checkbox";

const FormikCheckbox = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <div className="flex align-items-center my-2">
      <Checkbox {...field} {...props} />
      <label className="ml-2">{label}</label>
    </div>
  );
};

export default FormikCheckbox;
