import { confirmDialog } from "primereact/confirmdialog";

export const useConfirm = (onAccept) => {
  const confirm = (msj) => {
    confirmDialog({
      message: msj,
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Si",
      accept: onAccept,
      reject: true,
    });
  };

  const confirmDelete = (msj) => {
    confirmDialog({
      message: msj,
      header: "Confirmar",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Si",
      acceptClassName: "p-button-danger",
      accept: onAccept,
      reject: true,
    });
  };

  return { confirm, confirmDelete };
};
