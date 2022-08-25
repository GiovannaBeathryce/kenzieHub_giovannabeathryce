import { useContext, createContext, useState } from "react";
import api from "../Services/api";
import { AuthContext } from "./AuthContext";

export const ModalContext = createContext({});

const MoodalProvider = ({ children }) => {
  const { techs, setTechs } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);

  const token = localStorage.getItem("@KenzieHub:token");

  const addTec = async (data) => {
    if (token) {
      await api.post("/users/techs", data).then((_) => {
        api.get("/profile").then((res) => {
          setTechs(res.data.techs);
        });
      });
    }
    closeModal();
  };

  const removeTech = async (id) => {
    if (token) {
      await api.delete(`/users/techs/${id}`).then((_) => {
        api.get("/profile").then((res) => {
          setTechs(res.data.techs);
        });
      });
    }
  };

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isVisible,
        openModal,
        closeModal,
        addTec,
        removeTech,
        techs,
        setTechs,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default MoodalProvider;
