import "./sidebar.css";
//Items
import ItemsAuth from "./items/itemsAuth";
import ItemsNoAuth from "./items/itemsNoAuth";
//Router
import { Link } from "react-router-dom";
//Hooks
import useScreenSize from "../../../hooks/useScreenSize";
//Components
import { Button } from "primereact/button";
import Logo from "../../../assets/Logo_TyS.png";

const Sidebar = ({
  topbarToggle,
  sidebarToggle,
  setSidebarToggle,
  auth,
  routes,
}) => {
  const { width } = useScreenSize();
  const handleMobileNavigation = () => {
    if (width < 800) setSidebarToggle(!sidebarToggle);
  };
  return (
    <div
      className={`sidebar bg-primary-reverse shadow-1 ${
        topbarToggle ? "hide" : sidebarToggle ? "hide" : ""
      }`}
    >
      {/* HEADER */}
      <div className="w-full h-4rem flex justify-content-between align-items-center">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img
            src={Logo}
            alt="logo"
            width={45}
            height={45}
            className="ml-3 border-round-md"
          />
        </Link>
        <div className="md:hidden">
          <Button
            icon="pi pi-arrow-left"
            className="mr-2"
            onClick={() => setSidebarToggle(!sidebarToggle)}
            rounded
            text
          />
        </div>
      </div>
      {/* PAGINAS */}
      <div className="mt-2">
        {!auth ? (
          <ItemsNoAuth onClick={handleMobileNavigation} />
        ) : (
          <ItemsAuth routes={routes} onClick={handleMobileNavigation} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
