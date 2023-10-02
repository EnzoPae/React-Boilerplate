import { Button } from "primereact/button";

const SendButton = ({
  label,
  loading,
  disabled,
  onClick,
  setType,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      label={label}
      onClick={onClick}
      disabled={loading || disabled}
      className={`my-2 ${className}`}
      type={setType ? setType : "submit"}
      icon={loading ? "pi pi-spin pi-spinner" : null}
    />
  );
};

export default SendButton;
