import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function userLogged() {
      const token = localStorage.getItem("@KenzieHub:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");

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
  }, [user]);

  const userRegister = async (data) => {
    const response = await api.post("/users", data);

    const userId = response.data.id;

    userId ? navigate("/login", { replace: true }) : navigate("/register");
  };

  const signin = async (data) => {
    const response = await api.post("/sessions", data);

    const { user: userResponse, token } = response.data;
    const userId = response.data.user.id;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(userResponse);
    localStorage.setItem("@KenzieHub:token", token);
    localStorage.setItem("@KenzieHub:userId", userId);
    navigate("/home", { replace: true });
  };

  const checkout = () => {
    setUser(null);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
