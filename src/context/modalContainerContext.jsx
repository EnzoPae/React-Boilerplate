import { createContext, useContext, useState } from "react";

const ModalContainerContext = createContext();
export const useModalContainer = () => useContext(ModalContainerContext);

const ModalContainerProvider = ({ children }) => {
  const [path, setPath] = useState(null);
  const [state, setState] = useState(null);
  return (
    <ModalContainerContext.Provider value={{ path, setPath, state, setState }}>
      {children}
    </ModalContainerContext.Provider>
  );
};

export default ModalContainerProvider;
