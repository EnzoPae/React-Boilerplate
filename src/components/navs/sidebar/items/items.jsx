import { Link, useLocation } from "react-router-dom";
import DropItems from "./dropItems";
import "./items.css";

const Items = ({ routes, onClick }) => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return routes.map((category, i) => (
    <div key={i}>
      {category.noDropdown ? (
        //Item unico sin rutas hijas
        <Link
          to={category.path ? category.path : "/"}
          style={{ textDecoration: "none" }}
          onClick={onClick}
        >
          <div
            className={`sidebar-item ${
              isActive(category.path) ? "active-item" : ""
            }`}
          >
            <div className="sidebar-desc text-primary">
              <span className="flex align-items-center">
                {category.icon ? (
                  <i
                    className={`pi ${category.icon} mr-1`}
                    style={{ fontSize: "1.1rem" }}
                  />
                ) : null}
                {category.cat}
              </span>
            </div>
          </div>
        </Link>
      ) : (
        //Items con rutas hijas
        <DropItems category={category} onClick={onClick}/>
      )}
    </div>
  ));
};

export default Items;
