import { useContext } from "react";
import { createContext, useState } from "react";
import api from "../Services/api";
import { AuthContext } from "./AuthContext";

export const ModalContext = createContext({});

const MoodalProvider = ({ children }) => {
  const { user, setUser } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);

  useState(() => {
    async function userLogged() {
      const token = localStorage.getItem("@KenzieHub:token");

      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const { data } = await api.get("/profile");

        setUser(data);
      }
    }
    userLogged();
  }, [user]);

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
