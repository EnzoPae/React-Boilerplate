import { Tooltip } from "primereact/tooltip";

const Label = ({ label, tooltip, required, optional }) => {
  return (
    <>
      <Tooltip target=".target-icon" />
      <p className="font-semibold mb-1">
        {label}
        {required ? <span className="text-red-500 text-sm">*</span> : null}
        {optional ? <span className="ml-1 font-light text-xs">{"(opcional)"}</span> : null}
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