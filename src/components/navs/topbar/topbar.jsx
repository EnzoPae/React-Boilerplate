import "./Topbar.css";
import { useEffect, useRef } from "react";
//Context
import { useAuth } from "../../../context/authContext";
//Hooks
import useScreenSize from "../../../hooks/useScreenSize";
import { useLocation } from "react-router-dom";
//Components
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

const Topbar = ({ sidebarToggle, setSidebarToggle, auth, user, routes }) => {
  const { logout } = useAuth();
  //current route
  const location = useLocation();
  const filteredRoutes = routes.flatMap((cat) => cat.routes);
  const currentRoute = filteredRoutes.find((r) => r.path === location.pathname);
  const titleBar = () => {
    if (!auth || !currentRoute) {
      return "Terminales y Servicios";
    } else {
      const cat =
        user.role === "Empresa" ? user.company.Name : currentRoute.cat;
      return `${cat} / ${currentRoute.desc}`;
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
            <p className="hidden md:block mx-2 white-space-nowrap text-primary select-none">
              <i className="pi pi-user" /> {`${user.surname} | ${user.role}`}
            </p>
            <Button
              icon="pi pi-cog"
              onClick={(e) => menuConfig.current.toggle(e)}
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
