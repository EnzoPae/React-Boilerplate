import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./items.css";

const DropItems = ({ category, onClick }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const dropIsActive = (routes) => {
    return routes.some((r) => r.path === location.pathname);
  };
  return (
    <div
      className={`${open ? "sidebar-item open" : "sidebar-item"} ${
        dropIsActive(category.routes) ? "active-item" : ""
      }`}
    >
      <div onClick={() => setOpen(!open)} className="sidebar-desc text-primary">
        <span className="flex align-items-center">
          {category.icon ? (
            <i
              className={`pi ${category.icon} mr-1`}
              style={{ fontSize: "1.1rem" }}
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
                <div
                  className={`flex align-items-center ${`sidebar-childrens ${
                    isActive(r.path) ? "active" : ""
                  }`}`}
                >
                  <i className="pi pi-circle-fill mr-2" style={{ fontSize: '0.3rem' }}></i>
                  <p>{r.desc}</p>
                </div>
              </Link>
            );
        })}
      </div>
    </div>
  );
};

export default DropItems;
