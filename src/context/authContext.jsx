import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handleRoutes } from "../app/routes/handleRoutes";
import { Toast } from "primereact/toast";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);
  const [routes, setRoutes] = useState([]);
  const [state, setState] = useState(false);
  const toast = useRef(null);
  const showToast = () => {
    toast.current.show({
      severity: "success",
      summary: `Bienvenido`,
      detail: "Inicio de sesión exitoso",
    });
  };
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("token", "e564f66fjvas65w7");
    showToast();
    setState(!state);
    navigate("/");
  };
  const logout = () => {
    localStorage.removeItem("token");
    setState(!state);
    navigate("/signin");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
      setUser({
        name: "Enzo",
        surname: "Paez",
        role: "Admin",
      });
      setRoutes(handleRoutes("Admin"));
    } else {
      setAuth(false);
      setRoutes([]);
    }
  }, [state]);
  return (
    <div>
      <AuthContext.Provider value={{ auth, user, routes, login, logout }}>
        {children}
        <Toast ref={toast} />
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
