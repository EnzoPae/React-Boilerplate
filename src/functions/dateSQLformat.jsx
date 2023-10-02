//Esta funcion toma el formato de fecha SQL y lo transforma a formato dia/mes/anio
export const dateSQLformat = (SQLdate, format) => {
  if (!SQLdate) return "";
  const fecha = new Date(SQLdate);
  const dia = fecha.getUTCDate().toString().padStart(2, "0");
  const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, "0");
  const anio = fecha.getUTCFullYear().toString().substr(-4);
  const horas = fecha.getUTCHours().toString().padStart(2, "0");
  const minutos = fecha.getUTCMinutes().toString().padStart(2, "0");
  if (format === "addTime") {
    return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
  }
  if (format === "time") {
    return `${horas}:${minutos}`;
  } else {
    return `${dia}/${mes}/${anio}`;
  }
};