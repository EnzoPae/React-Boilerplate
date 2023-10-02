import { Tooltip } from "primereact/tooltip";

const Label = ({ label, tooltip }) => {
  return (
    <>
      <Tooltip target=".target-icon" />
      <p className="font-semibold mb-1">
        {label}
        {tooltip ? (
          <i
            className="target-icon pi pi-question-circle p-text-secondary ml-1"
            data-pr-tooltip={tooltip}
          />
        ) : null}
      </p>
    </>
  );
};

export default Label;
