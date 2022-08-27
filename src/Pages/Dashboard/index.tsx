import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Navbar from "../../Components/Navbar";
import { AuthContext } from "../../Contexts/AuthContext";

const Home = () => {
  const { user, loading } = useContext(AuthContext);

  const { checkout } = useContext(AuthContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? (
    <>
      <Navbar>
        <button onClick={() => checkout()}>Sair</button>
      </Navbar>
      <Header user={user} />
      <Main />
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

export default Home;
