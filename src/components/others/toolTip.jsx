import { Tooltip } from "primereact/tooltip";

const ToolTip = ({ text, icon }) => {
  return (
    <>
      <Tooltip target=".target-icon" />
      {text ? (
        <i
          className={`target-icon pi ${
            icon ? icon : "pi-question-circle"
          } p-text-secondary ml-1`}
          data-pr-tooltip={text}
        />
      ) : null}
    </>
  );
};

export default ToolTip;
