import "./Topbar.css";
import { useEffect, useRef } from "react";
//Context
import { useAuth } from "../../../context/authContext";
//Hooks
import useScreenSize from "../../../hooks/useScreenSize";
import { filterRoutes } from "../../../app/routes/filterRoutes";
import { useLocation } from "react-router-dom";
//Components
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

const Topbar = ({ sidebarToggle, setSidebarToggle }) => {
  const { auth, user, routes, logout } = useAuth();
  //current route
  const location = useLocation();
  const filteredRoutes = filterRoutes(routes);
  const currentRoute = filteredRoutes.find((r) => r.path === location.pathname);
  const titleBar = () => {
    if (!auth || !currentRoute) {
      return "Terminales y Servicios";
    } else {
      return `${currentRoute.category} / ${currentRoute.desc}`;
    }
  };
  //items config button
  const menuConfig = useRef(null);
  const items = [
    {
      label: "Cerrar sesion",
      icon: "pi pi-times",
      command: () => logout(),
    },
  ];
  //Widht
  const { width } = useScreenSize();
  useEffect(() => {
    if (width < 800) {
      setSidebarToggle(true);
    }
  }, [width]);
  return (
    <div className="topbar md:mx-4 mx-2">
      <div className="flex align-items-center">
        <Button
          icon="pi pi-bars"
          onClick={() => setSidebarToggle(!sidebarToggle)}
          rounded
          text
        />
        <p className="ml-3 font-semibold text-primary capitalize">
          {titleBar()}
        </p>
      </div>
      <div className="mr-2">
        {!auth ? null : (
          <div className="flex align-items-center">
            <p className="hidden md:block mx-1 white-space-nowrap text-primary font-semibold select-none">
              <i className="pi pi-user" /> {user}
            </p>
            <Button
              icon="pi pi-cog"
              onClick={(event) => menuConfig.current.toggle(event)}
              rounded
              text
            />
            <Menu model={items} popup ref={menuConfig} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
