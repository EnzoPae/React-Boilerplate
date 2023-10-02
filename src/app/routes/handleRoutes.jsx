//Rutas segun roles
import { routesAdmin } from "./routesAdmin";

export const handleRoutes = (role) => {
  switch (role) {
    case "Admin":
      return routesAdmin;
    default:
      return [];
  }
};
