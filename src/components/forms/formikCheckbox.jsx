import { useField } from "formik";
import { Checkbox } from "primereact/checkbox";
import ToolTip from "../others/toolTip";

const FormikCheckbox = ({ label, disabled, tooltip, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <div className="flex align-items-center my-2">
      <Checkbox {...field} {...props} disabled={disabled ? true : false} />
      <label className="ml-2">{label}<ToolTip text={tooltip}/> </label>
    </div>
  );
};

export default FormikCheckbox;
