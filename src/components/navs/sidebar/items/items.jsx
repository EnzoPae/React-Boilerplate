import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./items.css";

const Items = ({ routes, onClick }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const dropIsActive = (routes) => {
    return routes.some((r) => r.path === location.pathname);
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
                    style={{ fontSize: "1.2rem" }}
                  />
                ) : null}
                {category.cat}
              </span>
            </div>
          </div>
        </Link>
      ) : (
        //Items con rutas hijas
        <div
          className={`${open ? "sidebar-item open" : "sidebar-item"} ${
            dropIsActive(category.routes) ? "active-item" : ""
          }`}
        >
          <div
            onClick={() => setOpen(!open)}
            className="sidebar-desc text-primary"
          >
            <span className="flex align-items-center">
              {category.icon ? (
                <i
                  className={`pi ${category.icon} mr-1`}
                  style={{ fontSize: "1.2rem" }}
                />
              ) : null}
              {category.cat}
            </span>
            <i
              className={`pi pi-angle-down toggle-btn`}
              style={{ fontSize: "0.8rem" }}
            />
          </div>
          <div className="sidebar-routes">
            {category.routes.map((r) => {
              if (r.d)
                return (
                  <Link
                    key={`${r.path}`}
                    to={r.path ? r.path : "/"}
                    style={{ textDecoration: "none" }}
                    onClick={onClick}
                  >
                    <li
                      className={`sidebar-childrens ${
                        isActive(r.path) ? "active" : ""
                      }`}
                    >
                      {r.desc}
                    </li>
                  </Link>
                );
            })}
          </div>
        </div>
      )}
    </div>
  ));
};

export default Items;
