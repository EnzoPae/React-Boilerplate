import { Link, useLocation } from "react-router-dom";

const ItemsNoAuth = ({ onClick }) => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className="pr-1">
      <ul>
        <Link
          to={"/signin"}
          style={{ textDecoration: "none" }}
          onClick={onClick}
        >
          <li
            className={`py-2 pr-1 pl-4 hover:bg-green-100 border-round-right ${
              isActive("/signin") ? "bg-green-100" : ""
            }`}
          >
            <p
              className={`font-${
                isActive("/signin") ? "semibold" : ""
              } select-none text-sm text-color`}
            >
              <i
                className={`pi pi-sign-in mr-2`}
                style={{ color: "var(--primary-color)" }}
              />
              Iniciar Sesión
            </p>
          </li>
        </Link>
        <Link
          to={"/signup"}
          style={{ textDecoration: "none" }}
          onClick={onClick}
        >
          <li
            className={`py-2 pr-1 pl-4 hover:bg-green-100 border-round-right ${
              isActive("/signup") ? "bg-green-100" : ""
            }`}
          >
            <p
              className={`font-${
                isActive("/signup") ? "semibold" : ""
              } select-none text-sm text-color`}
            >
              Registrarse
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ItemsNoAuth;
