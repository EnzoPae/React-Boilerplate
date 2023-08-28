import "./App.css";
import { useState } from "react";
import { useAuth } from "./context/authContext";
//Bars
import Sidebar from "./components/navs/sidebar/sidebar";
import Topbar from "./components/navs/topbar/topbar";
//Layout
import Layout from "./app/layout";

function App() {
  const { auth, routes } = useAuth();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar
        auth={auth}
        routes={routes}
        topbarToggle={sidebarToggle}
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div
        className={`w-full content bg-green-50 ${
          sidebarToggle ? "sidebar-hide" : "sidebar-open"
        }`}
      >
        <Topbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <div className="md:mx-4 mx-2 my-2">
          <Layout auth={auth} routes={routes} />
        </div>
      </div>
    </div>
  );
}

export default App;
