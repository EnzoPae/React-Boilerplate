import { Dialog } from "primereact/dialog";
import { useModalContainer } from "../../context/modalContainerContext";

const ModalContainer = ({ content }) => {
  const { path, setPath } = useModalContainer();

  const renderContent = (prop) => {
    const activeContent = content.find((c) => c.path === path);
    return activeContent ? activeContent[prop] : null;
  };
  const visible = path ? true : false;
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header={renderContent("label")}
        visible={visible}
        style={{
          maxWidth: "70vw",
          minWidth: "40vw",
          minHeight: "15vw",
          maxHeight: "95vh",
          overflow: "auto",
        }}
        onHide={() => setPath(null)}
        footer={<div />}
      >
        {renderContent("component")}
      </Dialog>
    </div>
  );
};

export default ModalContainer;
