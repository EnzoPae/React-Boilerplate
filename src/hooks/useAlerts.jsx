import { useRef, useState } from "react";

export const useAlerts = () => {
  const ref = useRef(null);
  const [hideState, setHideState] = useState(false);
  const [hideMsj, setHideMsj] = useState("");

  const showSuccess = (msj, customMsj) => {
    ref.current.show({
      severity: "success",
      summary: "Acción Exitosa",
      detail: msj.data ? msj.data : customMsj ? customMsj : "",
      sticky: true,
    });
  };
  const showError = (msj) => {
    ref.current.show({
      severity: "error",
      summary: "Error",
      detail: msj.response.data.title
        ? msj.response.data.title
        : "Algo salió mal",
      sticky: true,
    });
  };

  const hideContent = (msj, customMsj) => {
    setHideMsj(
      typeof msj.data === "string"
        ? msj.data
        : customMsj
        ? customMsj
        : "Acción realizada con éxito"
    );
    setHideState(true);
  };

  return { showSuccess, showError, ref, hideContent, hideState, hideMsj };
};
