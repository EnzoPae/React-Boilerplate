import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const user_routes = {
  logistica: [
    {
      id: 1,
      path: "/operativos",
      desc: "Operativos",
      category: "logistica",
      element: "operativos",
      display: true,
    },
    {
      id: 2,
      path: "/viajes",
      desc: "Viajes",
      category: "logistica",
      element: "viajes",
      display: true,
    },
    {
      id: 5,
      path: "/combustible",
      desc: "Combustible",
      category: "logistica",
      element: "combustible",
      display: true,
    },
  ],
  personal: [
    {
      id: 3,
      path: "/vehiculos",
      desc: "Vehiculos",
      category: "personal",
      element: "vehiculos",
      display: true,
    },
    {
      id: 4,
      path: "/choferes",
      desc: "Choferes",
      category: "personal",
      element: "choferes",
      display: true,
    },
  ],
};

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);
  const [routes, setRoutes] = useState([]);
  const navigate = useNavigate();
  //funciones login / logout
  const login = () => {
    setAuth(true);
    navigate("/");
  };
  const logout = () => {
    setAuth(false);
    navigate("/signin");
  };

  useEffect(() => {
    if (auth) {
      setAuth(true);
      setUser("Enzo Paez")
      setRoutes(user_routes);
    } else {
      setAuth(false);
      setRoutes([]);
    }
  }, [auth]);
  return (
    <div>
      <AuthContext.Provider value={{ auth, user, routes, login, logout }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
