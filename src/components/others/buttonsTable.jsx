import { Button } from "primereact/button";

const ButtonsTable = ({ onEdit, onDelete, hideEdit, hideDelete }) => {
  return (
    <div className="flex flex-nowrap">
      {hideEdit ? null : (
        <Button
          icon="pi pi-pencil"
          size="small"
          onClick={onEdit}
          rounded
          text
        />
      )}
      {hideDelete ? null : (
        <Button
          icon="pi pi-trash"
          severity="danger"
          size="small"
          onClick={onDelete}
          rounded
          text
        />
      )}
    </div>
  );
};

export default ButtonsTable;
