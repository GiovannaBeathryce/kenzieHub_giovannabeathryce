import React, { useContext, createContext, useState, ReactNode } from "react";
import api from "../Services/api";
import { AuthContext, ITech, ITechProps } from "./AuthContext";

export const ModalContext = createContext({} as IModalContext);

interface IModalProviderProp {
  children: ReactNode;
}

export interface IModalContext {
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  addTec: (data: object) => Promise<void>;
  removeTech: (id: string) => Promise<void>;
  techs: ITech[];
  setTechs: React.Dispatch<React.SetStateAction<ITech[]>>;
}

const MoodalProvider = ({ children }: IModalProviderProp) => {
  const { techs, setTechs } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);

  const token = localStorage.getItem("@KenzieHub:token");

  const addTec = async (data: object) => {
    if (token) {
      await api.post("/users/techs", data).then((_) => {
        api.get("/profile").then((res) => {
          setTechs(res.data.techs);
        });
      });
    }
    closeModal();
  };

  const removeTech = async (id: string) => {
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
