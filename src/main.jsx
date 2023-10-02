import React from "react";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/authContext";
import ModalContainerProvider from "./context/modalContainerContext";
//Prime-react
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ModalContainerProvider>
          <App />
        </ModalContainerProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
