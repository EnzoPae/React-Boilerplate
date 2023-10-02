import { ProgressSpinner } from "primereact/progressspinner";

const Spinner = () => {
  return (
    <div className="flex justify-content-center align-items-center">
      <ProgressSpinner style={{ width: "50px", height: "50px" }} />
    </div>
  );
};

export default Spinner;
