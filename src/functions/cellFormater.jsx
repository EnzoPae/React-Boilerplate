import { dateSQLformat } from "./dateSQLformat";
export const cellFormater = (prop, format) => {
  const booleanColor = (prop) => {
    return (
      <span
        className={`border border-${
          prop ? "success" : "danger"
        } rounded-3 py-1 px-2 text-${prop ? "success" : "danger"}`}
      >
        <b>{prop ? "Si" : "No"}</b>
      </span>
    );
  };
  const prieceColor = (prop) => {
    return (
      <span
        className={`text-${!prop ? "" : prop < 0 ? "danger" : "success"}`}
      >{`$ ${prop ? prop : "0"}`}</span>
    );
  };
  switch (format) {
    case "km":
      return prop ? `${prop} km` : "";
    case "date":
      return dateSQLformat(prop);
    case "time":
      return dateSQLformat(prop, "time");
    case "date_time":
      return dateSQLformat(prop, "addTime");
    case "priece":
      return prop ? `$${prop}` : "";
    case "priece_color":
      return prieceColor(prop);
    case "boolean":
      return prop ? "Si" : "No";
    case "boolean_color":
      return booleanColor(prop);
    case "litros":
      return prop ? `${prop} L` : "";
    case "uppercase":
      return <div className="text-uppercase">{prop ? prop : ""}</div>;
    case "bold":
      return <div className="fw-bold">{prop ? prop : ""}</div>;
    case "round_number":
      return prop ? prop.toFixed(2) : null;
    default:
      return prop;
  }
};
