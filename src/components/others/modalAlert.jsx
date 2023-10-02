const ModalAlert = ({ msj }) => {
  const alertMsj = typeof msj === "string" ? msj : "";
  return (
    <div className="w-full text-center">
      <i className="pi pi-check-circle text-4xl text-primary mb-3" />
      <p>{alertMsj}</p>
    </div>
  );
};

export default ModalAlert;
