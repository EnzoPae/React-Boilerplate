import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const DefaultPage = () => {
  return (
    <div className="flex justify-content-center text-center">
      <div className="text-center text-color">
        <p className="text-primary text-7xl font-bold mb-2">404</p>
        <p>No se ha encontrado la página o</p>
        <p>el usuario no tiene acceso a la misma</p>
        <Link to="/">
          <Button label="Volver al inicio" raised className="mt-4"/>
        </Link>
      </div>
    </div>
  );
};

export default DefaultPage;
