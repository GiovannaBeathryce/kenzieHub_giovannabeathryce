import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Validators/loginUser";

import { Link } from "react-router-dom";
import Form from "../../Components/Form";
import Navbar from "../../Components/Navbar";
import { ButtonForm } from "../../Components/Button/style";
import { AuthContext } from "../../Contexts/AuthContext";
import { LoginPage } from "./style";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const { signin } = useContext(AuthContext);

  return (
    <LoginPage>
      <Navbar />
      <Form onSubmit={handleSubmit(signin)}>
        <h3>Login</h3>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>

        <ButtonForm type="submit">Entrar</ButtonForm>

        <p>Ainda não possui uma conta?</p>
        <Link className="cadastrar" to="/register">
          Cadastrar-se
        </Link>
      </Form>
    </LoginPage>
  );
};

export default Login;
