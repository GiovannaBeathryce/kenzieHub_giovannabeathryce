import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Validators/loginUser";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";
import Form from "../../Components/Form";
import Navbar from "../../Components/Navbar";
import { ButtonForm } from "../../Components/Button/style";
import { AuthContext } from "../../Contexts/AuthContext";
import { LoginPage } from "./style";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const { signin } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);

  const visibilit = () => setIsVisible(!isVisible);

  return (
    <LoginPage>
      <Navbar />
      <Form onSubmit={handleSubmit(signin)}>
        <>
          <h3>Login</h3>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email?.message}

          <label htmlFor="password">Senha</label>
          <div className="containerPassword">
            {!isVisible ? (
              <input
                type="password"
                id="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
            ) : (
              <input
                type="text"
                id="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
            )}
            <button type="button" onClick={() => visibilit()}>
              {!isVisible ? (
                <MdOutlineVisibilityOff />
              ) : (
                <MdOutlineVisibility />
              )}
            </button>
          </div>
          {errors.password?.message}

          <ButtonForm type="submit">Entrar</ButtonForm>

          <p>Ainda não possui uma conta?</p>
          <Link className="cadastrar" to="/register">
            Cadastrar-se
          </Link>
        </>
      </Form>
    </LoginPage>
  );
};

export default Login;
