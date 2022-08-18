import { createContext, useState } from "react";
import api from "../Services/api";

export const ModalContext = createContext({});

const MoodalProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const addTec = async (data) => {
    await api.post("/users/techs", data);
    closeModal();
  };

  const removeTech = async (id) => {
    await api.delete(`/users/techs/${id}`);
  };

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{ isVisible, openModal, closeModal, addTec, removeTech }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default MoodalProvider;
