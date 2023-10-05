import { useField } from "formik";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import Label from "./label";

const FormikDate = ({
  label,
  tooltip,
  value,
  onChange,
  disabled,
  ...props
}) => {
  const [field, meta] = useField(props);
  addLocale("es", {
    firstDayOfWeek: 1,
    dayNames: [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ],
    monthNamesShort: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    today: "Hoy",
    clear: "Limpiar",
  });
  return (
    <div className="my-2 flex-1">
      <Label label={label} tooltip={tooltip} />
      <Calendar
        {...field}
        {...props}
        value={value}
        onChange={onChange}
        className={`w-full ${meta.touched && meta.error ? "p-invalid" : null}`}
        disabled={disabled}
        showIcon
        locale="es"
        dateFormat="dd/mm/yy"
      />
      {meta.touched && meta.error ? (
        <small className="p-error">{meta.error}</small>
      ) : null}
    </div>
  );
};

export default FormikDate;
