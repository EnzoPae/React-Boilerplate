import { useField } from "formik";
import { Dropdown } from "primereact/dropdown";
import Label from "./label";

const FormikDropdown = ({
  label,
  tooltip,
  value,
  onChange,
  options,
  optionLabel,
  placeholder,
  disabled,
  optional,
  required,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className="my-2 flex-1">
      <Label
        label={label}
        tooltip={tooltip}
        required={required}
        optional={optional}
      />
      <Dropdown
        {...field}
        {...props}
        value={value}
        onChange={onChange}
        options={options}
        optionLabel={optionLabel}
        placeholder={placeholder}
        className={`w-full ${meta.touched && meta.error ? "p-invalid" : null}`}
        disabled={disabled}
      />
      {meta.touched && meta.error ? (
        <small className="p-error">{meta.error}</small>
      ) : null}
    </div>
  );
};

export default FormikDropdown;
