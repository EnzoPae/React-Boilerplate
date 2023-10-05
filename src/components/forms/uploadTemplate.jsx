import { useAlerts } from "../../hooks/useAlerts";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";

const UploadTemplate = ({ setFile, uploadHandler, hideUpload, _ref }) => {
  const { showError, ref } = useAlerts();
  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i
          className="pi pi-file-pdf p-3"
          style={{
            fontSize: "2em",
            borderRadius: "50%",
            backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)",
          }}
        />
        <span className="mt-2">Arrastrar un archivo PDF aquí</span>
      </div>
    );
  };
  const itemTemplate = (file) => {
    return (
      <div className="flex align-items-center p-1">
        <div className="flex align-items-center">
          <i className="pi pi-file-pdf" style={{ fontSize: "1.5rem" }} />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
      </div>
    );
  };
  const chooseOptions = {
    icon: "pi pi-fw pi-plus",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded",
  };
  const uploadOptions = {
    label: "Subir",
    className: hideUpload ? "hidden" : null,
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };
  const onSelect = (e) => {
    const file = e.files[0];
    setFile(file);
  };
  const onClear = () => {
    setFile(null);
  };
  return (
    <div>
      <Toast ref={ref} />
      <FileUpload
        ref={_ref}
        accept="pdf/*"
        maxFileSize={1000000}
        customUpload
        uploadHandler={uploadHandler}
        onSelect={onSelect}
        onClear={onClear}
        onError={() => showError()}
        emptyTemplate={emptyTemplate}
        itemTemplate={itemTemplate}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
      />
    </div>
  );
};

export default UploadTemplate;
