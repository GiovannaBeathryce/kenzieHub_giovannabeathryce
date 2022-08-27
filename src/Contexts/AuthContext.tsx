import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";

export const AuthContext = createContext({} as IAuthContext);

export interface IAuthProviderProp {
  children: ReactNode;
}

export interface IAuthContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  signin: (data: object) => Promise<void>;
  userRegister: (data: object) => Promise<void>;
  checkout: () => void;
  loading: boolean;
  returnLogin: () => void;
  techs: ITech[];
  setTechs: React.Dispatch<React.SetStateAction<ITech[]>>;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  user: object;
}

export interface ITechProps {
  techs?: ITech[];
}

export interface IUserProps {
  user: IUser;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
  techs?: string | object[];
  works?: string | object[];
}

const AuthProvider = ({ children }: IAuthProviderProp) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState<ITech[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function userLogged() {
      const token = localStorage.getItem("@KenzieHub:token");

      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          setTechs(data.techs);
          setUser(data);
        } catch (error) {
          console.error(error);
          localStorage.removeItem("@KenzieHub:token");
          localStorage.removeItem("@KenzieHub:userId");
        }
      }
      setLoading(false);
    }
    userLogged();
  }, []);

  const signin = async (data: object) => {
    const response = await api.post("/sessions", data);

    const { user: userResponse, token } = response.data;
    const userId = response.data.user.id;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setUser(userResponse);
    localStorage.setItem("@KenzieHub:token", token);
    localStorage.setItem("@KenzieHub:userId", userId);

    if (token && userId) {
      navigate("/home", { replace: true });
      setTechs(response.data.user.techs);
    }
  };

  const userRegister = async (data: object) => {
    const response = await api.post("/users", data);

    const userId = response.data.id;

    userId ? navigate("/login", { replace: true }) : navigate("/register");
  };

  const checkout = () => {
    setUser({} as IUser);
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:userId");
    navigate("/login", { replace: true });
  };

  const returnLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signin,
        userRegister,
        checkout,
        loading,
        returnLogin,
        techs,
        setTechs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
